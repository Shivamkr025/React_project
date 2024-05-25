const { products, products } = require('../model/allModels')

const productsView = async (req, res) => {
    try {
        const viewItem = await products.find()
        if (!viewItem) {
            return res.status(400).json({ error: "products not found" })
        }

        res.status(200).json(viewItem)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong in product view function" })
    }
}

const productAdd = async (req, res) => {
    const { productId, productName, description, category, newPrice, oldPrice } = req.body
    try {
        const findProduct = await products.findOne({ productId })
        if (findProduct) {
            return res.status(400).json({ error: "products is already in stock" })
        }


        const imageUrl = req.file ? req.file.filename : null;
        const newProduct = new products({
            productId, productName, description, category, newPrice, oldPrice,
            imageUrl
        });


        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong in product add function" })
    }
}

const productUpdate = async (req, res) => {

    const { productId } = req.body

    try {
        const findData = await products.findOne({ productId })
        if (!findData) {
            return res.status(404).json({ message: "Product not found" });
        }

        const getData = { ...req.body, imageUrl: req.file.filename }
        const submit = await products.findByIdAndUpdate({ productId }, { $set: getData }, { new: true })
        res.status(200).json(submit)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong in update product function" })
    }
}

const productDelete = async(req , res) =>{
    const { productId } = req.body;
    try {
        const product = await products.findByIdAndDelete({productId});
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong in delete product function" });
    }
}

const searchProducts = async (req, res) => {
    try {
        const products = await products.find({
            $or: [
                { productName: { $regex: req.params.key} },
                { category: { $regex: req.params.key } }
            ]
        });
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong in search products function" });
    }
};

module.exports = {productsView , productAdd , productUpdate , productDelete , searchProducts}