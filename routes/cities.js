const express = require('express')
const router  = express.Router()
const { getAllCities, getCity } = require('../controllers/cities')

// url -> /cities/
router.get('/', getAllCities)
// url -> /cities/1
router.get('/:cityId', getCity)

module.exports = router
