require("dotenv").config();
const express = require("express");
const errorMiddleware = require("./middlewares/error-middleware");
const notFoundMiddleware = require("./middlewares/not-found");

const app = express();

app.use("/login", (req, res, next) => {});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is on port", port));
