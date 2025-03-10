import { Customer } from "../models/customer.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getCustomerByID = asyncHandler(async (req, res) => {
    const customer = await Customer.findOne({ customer_id: req.params.id });
    if (!customer) {
        return res.json({ message: 'Customer not found' });
    }
    res.json(customer);
});

const addNewCustomer = async (req, res) => {
    const customer = new Customer(req.body)
    await customer.save()
    res.json(customer)
};

const upadteCustomerByID = async (req, res) => {
    const updatedCustomer = await Customer.findOneAndUpdate(
        { customer_id: req.params.id },
        req.body(),
        { new: true }
    )
    res.body(updatedCustomer)
};

const deleteCustomerByID = async (req, res) => {
    await Customer.findOneAndDelete(
        { customer_id: req.params.id }
    )
    res.body({ message: `Customer with id ${req.params.id} Deleted` })
};