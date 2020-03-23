var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

router.get('/', function(req, res, next) {
    ApiKey = process.env.DARKSKY_API_KEY
    let yesterdayUrl = 'https://api.darksky.net/forecast/' + ApiKey + '/51.4786,-0.158,1584902271?exclude=currently,hourly&units=si'
    let todayUrl = 'https://api.darksky.net/forecast/' + ApiKey + '/51.4786,-0.158?units=si'
    
    async function yesterdayTemp() { 
        const response = await fetch(yesterdayUrl)
        const data = await response.json()
        return data['daily']['data'][0]['apparentTemperatureHigh']
    }

    async function todayTemp() { 
        const response = await fetch(todayUrl)
        const data = await response.json()
        return data['daily']['data'][0]['apparentTemperatureHigh']
    }

    async function getDifference() {
        var ytd = await yesterdayTemp()
        var today = await todayTemp()
        return today - ytd
    }

    async function hotterOrColder() {
        var diff = await getDifference()
        
        if (diff > 0) {
            return 'hotter than'
        } else if (diff < 0) {
            return 'colder than'
        } else {
            return 'same as'
        }
    }

    hotterOrColder().then(message => res.send('today is ' + message + ' yesterday.'))

});

module.exports = router;