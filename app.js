const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send({ users: { name: 'Leo Messi', age: 35, country: 'AR'}});
});

app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
