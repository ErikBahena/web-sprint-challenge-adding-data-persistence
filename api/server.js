const express = require("express");

const server = express();
server.use(express.json());

server.use((err, next, req, res) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, stack: err.stack });
});

module.exports = server;
