const request = require('request');


var geoCodeAddress = (address) => {



		return new Promise((resolve,reject) => {


					let encodedAddress = encodeURIComponent(address);

					request({
						url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBFWF_zZsXzwlOswb3-FiAaS0vqT8bjhnc`,
						json:true
					},(error,response,body) => {

						if(error){
							reject('Unable to connect with google server');
							
						}else if(body.status === "ZERO_RESULTS"){
							reject(`Unable to find ${address}`);
						}else if(body.status === "OK"){
							

							resolve(body)

						
						}
						
					});




			});

}


geoCodeAddress('diu').then((body) => {

	console.log(JSON.stringify(body, undefined, 2));

}, (errorMsg) => {


console.log(errorMsg);


});


