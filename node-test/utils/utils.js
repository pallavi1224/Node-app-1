module.exports.add = (a,b) => a+b; 

module.exports.sqr = (a) => a*a; 

module.exports.asynAdd = (a,b,callback) => {
	setTimeout(() => {
		callback(a+b);
	},1000)
};

module.exports.asynSqr = (a,callback) => {
	setTimeout(() => {
		callback(a*a);
	},1000)
};

module.exports.setName = (user, fullName) => {
	var name = fullName.split();
	user.firstName = name[0];
	user.lastName = name[1];
	return user;
};