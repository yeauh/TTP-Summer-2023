const express = require("express");
const morgan = require('morgan');
const { list, find } = require("./pokeBank");
const pokeBank = require("./pokeBank");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

// app.get("/", (req, res) => res.send("Hello World!"));
app.get("/", (req, res) => {
  // res.send(list);
});
const PORT = 3000;

app.get("/pokemon/:id", (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const post = pokeBank.find(id);
  res.send(post);
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
