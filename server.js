const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App is running on Render 🚀");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server started"));
