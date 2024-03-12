const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`App is running to the port ${port}`);
});
