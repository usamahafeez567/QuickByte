import express from "express";
import { connect } from "./db/connect.js";
import userAuthRouter from "./routes/userAuth.js";
import formRouter from "./routes/form.js";
import cors from "cors";
import productDetails from "./DataFolder/productDetailsBackend.js";

const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use("/api/userAuth", userAuthRouter);
app.use("/api/form", formRouter);

app.get("/product", (req, res) => {
  res.send(productDetails);
});

app.get("/product/:id", (req, res) => {
  const product = productDetails.find((p) => p.id === req.params.id);
  res.send(product);
});

app.listen(5001, () => {
  console.log("Server Started");
});
