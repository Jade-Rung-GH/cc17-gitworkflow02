require("dotenv").config();
const express = require("express");

const app = express();

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is on port", port));
