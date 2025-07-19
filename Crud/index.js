const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse incoming JSON data
app.use(express.json());

const products = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
    title: "Product Title 1",
    price: "$49.99",
    description:
      "This is a short description of the product. It highlights its key features and benefits.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "Product Title 2",
    price: "$59.99",
    description: "This product is known for its excellent quality and design.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Product Title 3",
    price: "$39.99",
    description: "A great choice for anyone looking for value and quality.",
  },
  {
    id: 4,
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
    title: "Product Title 4",
    price: "$69.99",
    description: "A premium product with top-notch features and durability.",
  },
  {
    id: 5,
    image:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    title: "Product Title 5",
    price: "$89.99",
    description: "This product offers amazing functionality and style.",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2021/02/18/09/26/coca-cola-6026672_640.jpg",
    title: "Product Title 6",
    price: "$19.99",
    description: "An affordable option with all the features you need.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivxlk0gIeEnfE6NJyjd72jMzi2wMzPzjRDQ&s",
    title: "Product Title 7",
    price: "$79.99",
    description: "A versatile product with great performance and reliability.",
  },
  {
    id: 8,
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Product Title 8",
    price: "$99.99",
    description:
      "A high-end product that delivers amazing value for the price.",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZiPV6_uUifHYdx-gB54jYTO-zucpHFBWlAQ&s",
    title: "Product Title 9",
    price: "$90.9",
    description: "This product offers amazing functionality and style.",
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfufgmTlR_zyfzmYIBQRueh8fLVAIxfrdO6w&s",
    title: "Product Title 10",
    price: "$19.20",
    description: "This product is known for its excellent quality and design.",
  },
];

app.get("/", (req, res) => {
  res.render("index", { products: products });
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create_product", (req, res) => {
  const data = req.body;
  data["id"] = products.length + 1; // Increment id properly
  products.push(data);
  res.render("index"); // Send the new product back in response
});

app.get("/update/:productId", (req, res) => {
  const productId = req.params["productId"];
  const product = products.find((product) => product.id == productId);
  res.render("update", { product: product });
});

app.listen(9000);
