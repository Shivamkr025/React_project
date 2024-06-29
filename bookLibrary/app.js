const express = require('express')
const routerFile = require('./src/routes/booksRoute')
const mongoose = require('mongoose')

const app = express()

const PORT = 3000;
app.use(express.json())
app.use('/', routerFile)

mongoose.connect("mongodb://localhost:27017/bookLibrarys")
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch(() => {
        console.log("something is wrong");
    })



app.listen(PORT, () => {
    console.log(`listening to the server ${PORT}`);
}) 