const dotenv = require("dotenv");
const express = require("express");
const app = express();

const PORT = process.env.PORT;

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

app.listen(3000, () => {
  console.log(`server is running at port ${PORT}`);
});
