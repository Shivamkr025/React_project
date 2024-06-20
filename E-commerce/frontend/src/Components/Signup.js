import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:9000/api/users/signup', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, age, email, password })
            })

            if (!response.ok) {
                throw new Error('User already sign-up account');
            }

            const data = await response.json();
            localStorage.setItem(data);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div>
            <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body p-5 pt-0">
                            <form onSubmit={handleSubmit}>

                                <div class="form-floating mb-3">
                                    <input type="text"
                                        class="form-control rounded-3"
                                        id="floatingInput"
                                        placeholder="Enter your name "
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <label for="floatingInput">Enter Name </label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="number"
                                        class="form-control rounded-3"
                                        id="floatingInput"
                                        placeholder="Enter your age "
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        required
                                    />
                                    <label for="floatingInput">Enter Age</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="email"
                                        class="form-control rounded-3"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <label for="floatingInput">Email address</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="password"
                                        class="form-control rounded-3"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Singn up</button>

                                <small class="text-muted" style={{fontSize:'20px'}}>{error}</small>

                                <hr class="my-4" />
                                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                                    <svg class="bi me-1" width="16" height="16"><use href="#twitter"></use></svg>
                                    Log in
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    )
}

export default Signup
