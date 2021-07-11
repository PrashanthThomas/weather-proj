const express = require('express');
const weatherRoute = require('./routes/weatherData');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/weatherData', weatherRoute);

module.exports = app;
