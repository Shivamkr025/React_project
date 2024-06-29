const { membersModels, booksModels, issue , issueBookReturn} = require('../models/booksModels')
const { createToken } = require('../middleware/auth')
const validation = require("../middleware/validation")


const signUpFn = async (req, res) => {
    try {
        const { email } = req.body
        const findSignUp = await membersModels.findOne({ email })
        if (findSignUp) {
            return res.status(400).json({ message: "Member is already exist..." })
        }
        if(validation(email)){
            return res.status(400).json({message:"enter all charator in small .."})
        }
        const submit = membersModels(req.body)
        await submit.save()
        console.log(submit);
        res.status(200).json({ message: "member signup successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issues..." })
    }
}

const loginFn = async (req, res) => {
    const { email, password } = req.body
    try {
        const findLogin = await membersModels.findOne({ email, password })
        if (!findLogin) {
            return res.status(400).json({ message: "please check your email and password..." })
        }
        
        const token = createToken(email)
        res.cookie('token', token)
        res.status(200).json({ message: "login successfull..." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal issues..." })
    }
}

const viewAllMember = async (req, res) => {
    try {
        const findMember = await membersModels.find({}, { _id: 0, name: 1, age: 1, dob: 1 })
        res.status(200).json(findMember)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal issues.." })
    }
}

const addNewMember = async (req, res) => {
    try {
        const { email, password } = req.body
        if (password) {
            return res.status(400).json({ message: "No need to password..." })
        }
        const findSignUp = await membersModels.member.find({ email })
        if (findSignUp) {
            return res.status(400).json({ message: "Member is already add..." })
        }
        const submit = new membersModels(req.body)
        await submit.save()
        console.log(submit);
        res.status(200).json({ message: "member add successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issues..." })
    }
}

const removeMember = async (req, res) => {
    const { name, email } = req.body
    try {
        const remove = await membersModels.findOne({ name, email })
        console.log(remove);
        if (!remove) {
            return res.status(400).json({ message: "member is not exist..." })
        }
        await membersModels.deleteOne({ name, email })
        res.status(200).json({ message: "Member remove successfully..." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issues..." })
    }
}
const upDateInfo = async (req, res) => {
    const { name, age, dob, email } = req.body
    try {
        if (!email) {
            res.status(400).json({ message: "please enter your email...." })
        }
        const update = await membersModels.findOneAndUpdate({ email }, { $set: { name, age, dob } }, { new: true })
        res.status(200).json({ message: "data upDated successfully", update })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issues..." })
    } 
}

const addNewBook = async (req, res) => {
    const { BookId } = req.body

    try {
        const findTitle = await booksModels.findOne({ BookId })
        console.log(findTitle);
        if (findTitle) {
            return res.status(400).json({ message: "This book is already exist..." })
        }
        const addBook = new booksModels(req.body)
        await addBook.save()
        res.status(200).json({ message: "new book add successfully...", addBook })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issuess.." })
    }
}

const listAllBook = async (req, res) => {
    try {
        const findBook = await booksModels.find()
        res.status(200).json({ message: "find all book list successfully...", findBook })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issuess..." })

    }
}

const removeBook = async (req, res) => {
    const { BookId } = req.body
    try {
        const findRemoveBook = await booksModels.findOne({ BookId })
        if (!findRemoveBook) {
            return res.status(400).json({ message: "This book is not available in library.." })
        }
        await booksModels.deleteOne({ BookId })
        res.status(200).json({ message: "Remove a book from the library's collection..." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "some internal issues.." })
    }
}

const updateBook = async (req, res) => {
    const { BookId, BookTitle, Description, Author, Publised } = req.body
    try {
        const bookFind = await booksModels.findOne({ BookId })
        if (!bookFind) {
            return res.status(400).json({ message: "This book is not available in library.. " })
        }
        const findUpdate = await booksModels.findOneAndUpdate({ BookId }, { $set: { BookTitle, Description, Author, Publised } }, { new: true })
        res.status(200).json({ message: "Book updated successfully...", findUpdate })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal problem..." })
    }
}

const issueBook = async (req, res) => {
    const { BookId, email } = req.body
    try {
        const book = await booksModels.findOne({ BookId })
        if (!book) {
            return res.status(400).json({ message: "This book is not available in library..." })
        }

        const member = await membersModels.findOne({ email })
        if (!member) {
            return res.status(400).json({ message: "please check your email..." })
        }
        const issueCheck = await issue.findOne({BookId , email})
        if(issueCheck){
            return res.status(400).json({message:"Book is already issued..."})
        }
        const issued = new issue(req.body)
        issued.issueDate = new Date()
        await issued.save()
        res.status(200).json({ message: "Book issue successfully..", issued })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issues..." })
    }
}

const returnBook = async (req, res) => {
    const { BookId, email } = req.body
    try {
        const issuedBook = await issue.findOne({ BookId, email })
        if (!issuedBook) {
            return res.status(400).json({ message: "Book not issued to this member.." })
        }
       
        const checkBook = await issueBookReturn.findOne({ BookId, email })
        if (checkBook) {
            return res.status(400).json({ message: "Book is already returned..." })
        }
       
        const returnBook = new issueBookReturn(req.body)
        returnBook.returnDate = new Date()
        await returnBook.save()
        res.status(200).json({ message: "Book return successfully...", returnBook })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some internal issues..." })
    }
}

module.exports = {
    signUpFn, loginFn, viewAllMember, addNewMember,
    removeMember, upDateInfo, addNewBook, listAllBook,
    removeBook, updateBook, issueBook, returnBook

}

