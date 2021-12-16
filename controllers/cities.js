const cities = require('../models/cities')

const getAllCities = ((req, res, next) => {
    res.json({
        cities,
        count: cities.length
    })
})

const getCity = ((req, res, next) => {
    const id = req.params.cityId

    const city = [...cities].find(city => city.id == id)

    if (city) {
        res.status(200).json({
            city
        })
    } else {
        res.status(302).json({
            error: true,
            message: `Sorry, no product found with id ${id}`
        })
    }
})

module.exports = { getAllCities, getCity }
