const request = require('request');

var geocodeAddress = (address, callback) => {

let encodedAddress = encodeURIComponent(address);

request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBFWF_zZsXzwlOswb3-FiAaS0vqT8bjhnc`,
	json:true
},(error,response,body) => {

	if(error){
		callback('Unable to connect with google server');
		
	}else if(body.status === "ZERO_RESULTS"){
		callback(`Unable to find ${address}`);
	}else if(body.status === "OK"){
		callback(undefined,{
			lat:body.results[0].geometry.location.lat,
			lng:body.results[0].geometry.location.lng
		});

		

	
	}
	
})



}

module.exports = {
	geoCodeAddress:geocodeAddress
}
