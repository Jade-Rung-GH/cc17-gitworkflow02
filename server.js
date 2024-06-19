require("dotenv").config();
const express = require("express");
const notFoundMiddleware = require("./middlewares/not-found");

const app = express();

app.use(notFoundMiddleware);

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is on port", port));
