const express = require('express')
const product = require('../controllers/product')
const {upload} = require('../middleware/multer')


const router = express.Router()

router.get('/api/product/view' , product.productsView)

router.post('/api/product/add' , upload.single('imageUrl') , product.productAdd)

router.put('/api/product/update' , upload.single('imageUrl') , product.productUpdate)

router.delete('/api/product/delete' , product.productDelete)

router.get('/api/product/search/:key' , product.searchProducts)

module.exports = router