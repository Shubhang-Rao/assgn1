const express = require("express")
const router = express.Router()
const Product = require('../src/models/productSchema')

// const initialProducts = [
//     { product_id: 'P001', product_name: 'Acer', price: 70000 },
//     { product_id: 'P002', product_name: 'HP', price: 80000 }
// ];

// Product.insertMany(initialProducts)
//     .then(() => console.log('Initial products inserted'))
//     .catch((err) => console.error('Error inserting initial products', err));


router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ product_id: req.params.id });
    if (!product) {
        return res.json({ message: 'Product not found' });
    }
    res.json(product);
});

router.post('/', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.json(product)
})


router.put('/:id', async (req, res) => {
    const updatedProduct = await Product.findOneAndUpdate(
        { product_id: req.params.id },
        req.body,
        { new: true }
    )
    res.json(updatedProduct)
})

router.delete('/:id', async (req, res) => {
    await Product.findOneAndDelete({ product_id: req.params.id })
    res.json({ message: 'Product deleted' })
})

router.delete('/', async (req, res) => {
    await Product.deleteMany({})
    res.json({ message: "Products Deleted" })
})

module.exports = router