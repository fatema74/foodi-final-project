const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

// mongodb config

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodi-server.r97od.mongodb.net/foodi-server?retryWrites=true&w=majority`
  )
  .then(console.log('MongoDB Connection Successfully!'))
  .catch(error => console.log('Error connecting to MongoDB', error));

// import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');

app.use('/menu', menuRoutes);
app.use('/carts', cartRoutes);

app.get('/', (req, res) => {
  res.send('Hello Fatema!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
