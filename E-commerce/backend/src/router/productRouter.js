import express from 'express';
import {productsView , productAdd , productUpdate , productDelete , searchProducts} from '../controllers/product.js'
// import  upload  from '../middleware/multer.js';
// , upload.single('imageUrl') 

const router = express.Router()

router.get('/api/product/view' ,productsView)

router.post('/api/product/add' , productAdd)

router.put('/api/product/update'  , productUpdate)

router.delete('/api/product/delete' ,productDelete)

router.get('/api/product/search/:key' ,searchProducts)

export default router