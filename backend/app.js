var express = require("express");
var app = express();
const mongoose = require("mongoose");
var cors = require('cors')
let Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://ali:ASDasd123@cluster0.mj8tjqz.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(function () {
    console.log("connected to DB");
  })
  .catch(function (err) {
    console.log("Error conecting to db");
  });

app.use(express.json());
app.use(cors())

app.get("/getProducts", function (req, res) {
  Product.find()
    .then(function (productsData) {
      console.log(productsData);
      res.send({
        products: productsData,
      });
    })
    .catch(function (err) {
      console.log("error getting Data");
    });
});
app.get("/getProducts/:id", function (req, res) {
  var id=req.params.id;
  Product.findOne({_id:id})
    .then(function (singleProduct) {
      console.log(singleProduct);
      res.send({
        product: singleProduct,
      });
    })
    .catch(function (err) {
      console.log("error getting singleProduct Data");
    });
});

app.listen(3002, function () {
  console.log("Server Connected");
});
