import express from "express";
const server = express();

const port = 4000;

server
  .get("/", (req, res) => {
    res.send({
      message: "Hello, World!",
    });
  })
  .get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
  });

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

