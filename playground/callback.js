var getUser = (id,callback) => {
	
	var user = {
		id:id,
		name:'Yashraj'
	}

	callback(user);

	setTimeout(() => {
		callback();
	},3000);

}


getUser(25,(object) => {
	console.log(object)
})