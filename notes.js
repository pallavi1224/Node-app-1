console.log("Notes App starting...");

//console.log(module); 
//module.exports.age = 25;
module.exports.addNote = () => {
	console.log("Note Added");
	return 'New Note!..';
};

module.exports.add = (num1,num2) => {
	return (num1+num2);
}