const mongoose = require('mongoose')

const membersSchema = new mongoose.Schema({
    name:String,
    age:Number,
    dob:String,
    email:String,
    password:String
})

const bookSchema = new mongoose.Schema({
    BookId:Number,
    BookTitle:String,
    Description:String,
    Author:String,
    Publised:String
})

const bookIssueSchema = new mongoose.Schema({
    BookId:Number,
    email:String,
    issueDate:Date,
    returnDate:Date
})

const bookReturnSchema = new mongoose.Schema({
    BookId:Number,
    email:String,
    returnDate:Date
})

const membersModels = mongoose.model('members' , membersSchema)
const booksModels = mongoose.model('books' , bookSchema)
const issue = mongoose.model("issues" , bookIssueSchema)
const issueBookReturn = mongoose.model("returnBooks" , bookReturnSchema)


module.exports = { membersModels , booksModels  , issue , issueBookReturn}




