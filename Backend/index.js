const express = require("express");
const connection = require("./config/db");
const prodRouter = require("./routes/product.routes");
const userRouter = require("./routes/users.router");
const cors = require("cors")
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors())
app.use("/products", prodRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("Health check is fine");
});

app.listen(port, async () => {
  await connection;
  console.log(`Server is running on ${port} and DB is connected`);
});
