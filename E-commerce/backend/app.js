import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

dotenv.config();


const PORT = process.env.PORT || 9000
const app = express()


app.use(cors());
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