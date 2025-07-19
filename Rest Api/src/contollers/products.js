const Products = require("../model/product");

const form = (req, res) => {};

const getall = (req, res) => {
  return res.json({
    msg: "get all products",
    data: Products,
  });
};

const getOne = (req, res) => {
  let productId = Number(req.params["productId"]);
  const findproduct = Products.filter(
    (Products) => Products.id === Products.id
  );

  if (!findproduct[productId])
    return res.status(400).json({ msg: "data not found" });

  const onedata = Products.filter((product) => product.id === productId);

  return res.json({
    msg: `get one products ${productId}`,
    data: onedata,
  });
};

const createOne = (req, res) => {
  const bodyData = req.body;

  const newProduct = {
    id: Products.length + 1,
    title: bodyData["title"],
    price: bodyData["price"],
    description: bodyData["description"],
  };

  Products.push(newProduct);

  return res.json({
    msg: "created one products",
  });
};

const updateOne = (req, res) => {
  let productId = Number(req.params["productId"]);
  const bodyData = req.body;

  if (!productId) return res.status(400).json({ msg: "invalid product id " });

  if (productId >= productId.length)
    return res.json({ msj: "product not found" });

  if (!bodyData) return res.json({ msj: "body data not found" });

  productId--;

  if (!Products[productId])
    return res.status(400).json({ msg: "data not found" });
  if (bodyData["title"]) {
    Products[productId]["title"] = bodyData["title"];
  }

  if (bodyData["price"]) {
    Products[productId]["price"] = bodyData["price"];
  }

  if (bodyData["description"]) {
    Products[productId]["description"] = bodyData["description"];
  }

  return res.json({
    msg: `updated one products ${productId}`,
    data: bodyData,
  });
};

const deleteOne = (req, res) => {
  let productId = Number(req.params["productId"]);
  if (!productId) return res.status(400).json({ msg: "invalid product id " });

  if (productId > productId.length)
    return res.json({ msj: "product not found" });

  productId--;

  delete Products[productId];

  return res.json({
    msg: `delete one products ${++productId}`,
    products: Products,
  });
};

module.exports = { getall, getOne, createOne, updateOne, deleteOne };
