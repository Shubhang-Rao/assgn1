const express = require('express')
const router = express.Router()
const Order = require('../src/models/orderSchema')

const getOrderByID =  async (req, res) => {
    const order = await Order.findOne({ order_id: req.params.id });
    if (!order) {
        return res.json({ message: 'Order not found' });
    }
    res.json(order);
};

const upadteOrderByID = async (req, res) => {
    const updatedOrder = await Order.findOneAndUpdate(
        { product_id: req.params.id },
        req.body(),
        { new: true })

    res.json(updatedOrder)
};

router
    .routes(':/id')
    .get(getOrderByID)
    .put(upadteOrderByID)

router.delete('/', async (req, res) => {
    await Order.deleteMany({})
    res.json({ message: "ALL ORDERS DELETED" })
})

router.post('/new', authenticateUser, async (req, res) => {
    const { order_id, order_det, products } = req.body;

    const order = new Order({
        order_id,
        order_det,
        products,
        user: req.user.username,
    });

    await order.save();
    res.json({ message: "Order placed successfully", order });
});



module.exports = router
