
const geocode = require('./geocode/geocode');
const yargs = require('yargs');
const weather = require('./weather/weather');


const argv = yargs.options({
	a:{
		demand:true,
		alias:'address',
		describe:'Address to fetch weather for',
		string:true
	}
})
.help()
.alias('help','h')
.argv;

geocode.geoCodeAddress(argv.a,(errorMsg,response) => {

if(errorMsg){

	console.log(errorMsg);

}else{



	weather.getWeather(response.lat,response.lng,(errorMsg,response) => {
			if(errorMsg){
					console.log(errorMsg);
				}else{

					console.log(`it's currenly ${response}`);

				}


		});

}

});








