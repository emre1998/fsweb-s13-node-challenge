const express = require('express');
const server = express();
server.use(express.json());
const actionsRouter = require("./actions/actions-router");
const ProjectRouter = require("./projects/projects-router");

server.use("/api/actions",actionsRouter);
server.use("/api/projects",ProjectRouter);



module.exports = server;
