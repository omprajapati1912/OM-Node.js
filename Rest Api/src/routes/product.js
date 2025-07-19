const express = require("express");
const products = require("../contollers/products");

const route = express.Router();

//route.get("/create-product", products.form);
route.get("/", products.getall);
route.get("/:productId", products.getOne);
route.post("/submit-products", products.createOne);
route.put("/:productId", products.updateOne);
route.delete("/:productId", products.deleteOne);

module.exports = route;
