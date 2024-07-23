const express = require("express");
const connection = require("./config/db");
const prodRouter = require("./routes/product.routes");
const userRouter = require("./routes/users.router");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/products", prodRouter);
app.use("/user", userRouter);

app.listen(port, async () => {
  await connection;
  console.log(`Server is running on ${port} and DB is connected`);
});
