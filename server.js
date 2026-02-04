const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Step 1: Setup app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Step 2: Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodorders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Step 3: Define Order Schema
const orderSchema = new mongoose.Schema({
    customerName: String,
    customerPhone: String,
    deliveryAddress: String,
    items: Array,
    timestamp: String
});

// Step 4: Create model
const Order = mongoose.model('Order', orderSchema);

// Step 5: Create API endpoint
app.post('/api/orders', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).send('Order saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving order');
    }
});

// Step 6: Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
