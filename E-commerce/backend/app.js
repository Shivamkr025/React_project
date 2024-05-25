const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const userRouter = require('./src/router/userRouter')
const productRouter =  require('./src/router/productRouter')
require('dotenv').config()

const PORT = process.env.PORT 
const app = express()


app.use(express.json())
app.use(cookieParser());
app.use('/', userRouter)
app.use('/' , productRouter)



mongoose.connect('mongodb://localhost:27017/E-Shops')
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })

app.listen(PORT , ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})