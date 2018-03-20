
// const geocode = require('./geocode/geocode');
const yargs = require('yargs');
// const weather = require('./weather/weather');
const axios = require('axios');
const fs = require('fs');

const argv = yargs.options({
	a:{
		alias:'address',
		describe:'Address to fetch weather for',
		string:true,
		default:"diu"
	}
})
.help()
.alias('help','h')
.argv;

let encodedAddress = encodeURIComponent(argv.address);

axios
.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBFWF_zZsXzwlOswb3-FiAaS0vqT8bjhnc`)
.then((response) => {


	if(response.status !== 200) {
		throw new Error('Unable to fetch!');
	}
	
	 let lat = response.data.results[0].geometry.location.lat;
	 let lng = response.data.results[0].geometry.location.lng;

	
	return axios.get(`https://api.darksky.net/forecast/6778dc991ca5637b8eb73925b446bb43/${lat},${lng}`)





}).then((response) => {

	if(response.status !== 200) {
		throw new Error('Unable to fetch!');
	}


return response.data;


})
.then((response) => {


let str = `\n\n In ${encodedAddress} temperature is ${response.currently.temperature}`;

fs.appendFileSync('./history.txt', str);

console.log(`In ${encodedAddress} temperature is ${response.currently.temperature}`);




})
.catch((e) => {
	console.log(e);
})










