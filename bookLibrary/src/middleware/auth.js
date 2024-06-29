const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

console.log(process.env.secretKey);
const createToken = (email)=>{
    return jwt.sign({email} , process.env.secretKey , {expiresIn:'2h'})
}

const verifyToken = (req , res , next)=>{
    try {
        if(req.headers.cookie){
            const token = req.headers.cookie.split("=")[1]
            const check = (token , process.env.secretKey)
            req.check = check
            next()
        }else{
            res.status(400).json({error:"enter your email...."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"something is happning in verification..."})
    }
}

module.exports = { createToken , verifyToken }













// const createToken = (email)=>{
//     return jwt.sign({email} , secretKey ,{expiresIn: '24h'})
// } 

// const verifyToken = async(req , res , next )=>{
//     try {
//         if(req.headers.cookie){
//             const token = req.headers.cookie.split('=')[1]
//             const check = (token ,secretKey)
//             req.check = check
//             next()
//         }
//         else{
//             res.status(400).json({message:"please login your account..."})
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:"internal issues..."})
//     }
// }
