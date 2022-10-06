const express = require('express');
const server = express();
const actionRouter = require('./api/actions/actions-model')

server.use('/api/actions', actionRouter)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!



module.exports = server;
