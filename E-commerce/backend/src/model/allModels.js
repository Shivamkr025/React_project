import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const productSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    description: String,
    category: String,
    newPrice: Number,
    oldPrice: Number,
    quantity: Number,
    imageUrl: String
})

const orderSchema = new mongoose.Schema({
    orderId: String,
    productId: String,
    email: String,
    quantity: Number,
    totalPrice: Number
})

const users = mongoose.model('users', userSchema)
const products = mongoose.model('products', productSchema)
const orders = mongoose.model('orders', orderSchema)

export default { users, products, orders }