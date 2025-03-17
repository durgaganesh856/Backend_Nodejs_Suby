const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

dotEnv.config();

const app = express();
const PORT = 4000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connection Successful'))
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server started and running at ${PORT}`);
});

app.use('/home', (req, res) => {
  res.send('Welcome to Home Page2');
});