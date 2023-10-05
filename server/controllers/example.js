const exampleRouter = require('express').Router()
const Vehicle = require('../models/vehicle')

// HTTP GET
exampleRouter.get('/', async (request, response) => {
  const vehicles = await Vehicle.find({})
  response.json(vehicles)
})

module.exports = exampleRouter