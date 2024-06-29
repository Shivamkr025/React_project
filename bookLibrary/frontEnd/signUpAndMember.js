


async function signupFunction() {
    const storeSignup = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    console.log(storeSignup);

    try {
        const url = 'http://localhost:3000/signUp';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(storeSignup)
        });

        if (!response.ok) {
            throw new Error('Signup failed');
        }

        const signData = await response.json();
        console.log(signData);
        document.getElementById('signupShow').innerHTML = signData.message;
    } catch (error) {
        console.error(error);
        document.getElementById('signupShow').innerHTML = "bed request";
    }
}

async function loginFunction() {
    const storeLogin = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    try {
        const url = ('http://localhost:3000/login');
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(storeLogin)
        })
        if (!response.ok) {
            throw new Error('login failed')
        }
        const loginData = await response.json()
        console.log(loginData);
        document.getElementById('loginShow').innerHTML = loginData.message
    } catch (error) {
        console.log(error);
        document.getElementById('loginShow').innerHTML = "some error is comming"
    }
}


function listofMember() {
    fetch("http://localhost:3000/viewAllMembers")
        .then((data) => {
            const res = data.json()
            return res
        })
        .then((value) => {
            console.log(value);
            const name2 = document.querySelector('.listMember-container')
            name2.innerHTML = "",
                value.map((dataCome) => {
                    name2.innerHTML += `
            <div id="member-detail">
             <h4>name = ${dataCome.name}</h2>
            <h4>age = ${dataCome.age}</h2>
            <h4>dob = ${dataCome.dob}</h2>
            </div>`

                });
        }).catch((error) => {
            console.log(error);
        })

}

async function memberadd() {
    const storeMember = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
    }
    console.log(storeMember);
    try {
        const url = ('http://localhost:3000/addnewmember')
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storeMember)
        });

        if (!response.ok) {
            throw new Error('Error adding member');
        }

        const memberData = await response.json();
        console.log(memberData);
        document.getElementById('dataShow').innerHTML = memberData.message;
    } catch (error) {
        console.error(error);
        document.getElementById('dataShow').innerHTML = 'Error adding member';
    }
}


async function updateMember() {
    const updateStore = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value
    }
    try {
        const url = ("http://localhost:3000/upDateInfo")
        var response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateStore)
        });
        if (!response.ok) {
            throw new error("email is not correct")
        }
        const updateData = await response.json()
        console.log(updateData);
        document.querySelector("#updateShow").innerHTML = updateData.message

    } catch (error) {
        console.log(error);
        document.querySelector("#updateShow").innerHTML = "some internal issue"
    }
}

async function deleteMember() {
    const deletes = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    }
    try {
        const url = ("http://localhost:3000/removeMember")
        var response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deletes)
        });
        if (!response.ok) {
            throw new error("email is not correct")
        }
        const deleteData = await response.json()
        console.log(deleteData);
        document.querySelector("#removeShow").innerHTML = deleteData.message
    } catch (error) {
        console.log(error);
        document.querySelector("#removeShow").innerHTML = "some internal issue..."

    }
}



