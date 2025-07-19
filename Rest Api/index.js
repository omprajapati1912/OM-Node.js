const express = require("express");
const productsRoute = require("./src/routes/product");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());
app.use("/productsRoute", productsRoute);

app.get("/", (req, res) => {
  res.render("create");
});

app.listen(5000);
