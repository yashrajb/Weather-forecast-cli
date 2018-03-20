var asynAdded = (a,b) => {
	

	return new Promise((resolve,reject) => {

	setTimeout(() => {


		if(typeof a === 'number' && typeof b === 'number')
		{

			resolve(a + b);

		}else{

			reject('hey please pass the numbers');

		}

	},3000);

		

	});



}

asynAdded(1,2).then((resolve) => {
	
	console.log(resolve);

}, (reject) => {

	console.log(reject);
	
})