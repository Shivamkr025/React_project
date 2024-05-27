import express from 'express';
import product from '../controllers/product.js'
import { upload } from '../middleware/multer.js';


const router = express.Router()

router.get('/api/product/view' , product.productsView)

router.post('/api/product/add' , upload.single('imageUrl') , product.productAdd)

router.put('/api/product/update' , upload.single('imageUrl') , product.productUpdate)

router.delete('/api/product/delete' , product.productDelete)

router.get('/api/product/search/:key' , product.searchProducts)

export default router