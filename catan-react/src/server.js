// src/server.js
const Server = require("boardgame.io/server").Server;
const Catan = require("./Game").Catan;

const server = Server({ games: [Catan] });

server.run(8000);