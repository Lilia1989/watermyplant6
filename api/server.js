const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router.js');
const plantsRouter = require('./plants/plant-router');
const usersRouter = require('./users/users-router.js');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api/auth', authRouter)
server.use('/api/items', plantsRouter)
server.use('/api/users', usersRouter)


server.get('/', (req, res) => {
  res.status(200).send("<h1>Welcome to Lilia's Water My Plants API</h1>")
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server