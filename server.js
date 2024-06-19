require("dotenv").config();
const express = require("express");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

app.use(errorMiddleware);
let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is on port", port));
