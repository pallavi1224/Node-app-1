var getUser = (id,callback) => {
	var user = {
		id:id,
		name:'pallavi'
	};
	setTimeout(()=>{
		callback(user);
	},2000);
	
};

getUser(11,(user_object)=>{
	console.log(user_object);
})