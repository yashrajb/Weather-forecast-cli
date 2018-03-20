
const request = require('request');



let getWeather = (lat,lng,callback) => {

request({
			url:`https://api.darksky.net/forecast/6778dc991ca5637b8eb73925b446bb43/${lat},${lng}`,
			json:true
		},(error,response,body) => {

			if(!error && response.statusCode===200) {

				callback(undefined,body.currently.temperature);

			}else{

				callback('Unable to fetch!');

			}
			
		});


}



module.exports = {

getWeather


}