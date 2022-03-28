const request = require('request')
const url = '42.3605,-71.0596'
const forecast  = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=8fe25c5c2e191a1eacf59f9528dcf893&query='+ latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (response.body.error) {
            callback('Unable to find location',undefined)
        } else
        callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out." +
        "and wind speed is " + response.body.current.wind_speed)
        })

}

module.exports = forecast