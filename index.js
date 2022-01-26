const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);

  app.listen( process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });