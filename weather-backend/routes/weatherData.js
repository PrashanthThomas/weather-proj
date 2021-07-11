const apiKey = 'df30ced3ee94c86c2cf6a590ed2b1469';
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:city', async (req, res, next) => {
    const city = req.params['city'];
    let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    let weatherData = await weatherRes.json();
    let forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=minutely,hourly&appid=${apiKey}`);
    let forecastData = await forecastRes.json();
    res.send(forecastData);
});

module.exports = router;
