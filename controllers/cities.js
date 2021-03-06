const cities = require('../models/cities')

const getAllCities = ((req, res, next) => {
    res.status(200).json({
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
            message: `Sorry, no city found with id ${id}`
        })
    }
})

module.exports = { getAllCities, getCity }
