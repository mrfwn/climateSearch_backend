const express = require('express')

module.exports = function(server) {

    // Define URL BASE 
    const router = express.Router()
    server.use('/api', router)

    // Routes for Citys 
    const searchCity = require('../api/searchCity/searchCityService')
    searchCity.register(router, '/searchCity')
}