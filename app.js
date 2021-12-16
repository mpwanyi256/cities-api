const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const citiesRoutes = require('./routes/cities')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Handle CORSE
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') { // What methods to allow
        req.header(
            'Access-Control-Allowed-Methods',
            'POST, GET'
        );
        return res.status(200).json({});
    }
    next();
})

// Routes
app.use('/cities', citiesRoutes)

// Error handler for invalid routes
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

// Handles all other errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app
