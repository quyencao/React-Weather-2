var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5fbf086bb55fa5624bae00f31103a9f6";

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);

        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res) => {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            throw new Error(res.data.message);
        });
    }
}
