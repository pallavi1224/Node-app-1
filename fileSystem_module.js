console.log("Starting App...");

const fs =require('fs');

//after v7 this gives you the warning
fs.appendFile('Greeting.txt','Hello World!.....');


//for Callback function
fs.appendFile('Greeting.txt','Hello World!.....',function(err){
	if(err){
		console.log("Unable to write the file");
	}
});

//If we have v7 then for avoing the warning
fs.appendFileSync('Greeting.txt','Hello World!.....');