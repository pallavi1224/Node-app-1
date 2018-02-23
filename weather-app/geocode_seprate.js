var request = require('request');
var yargs = require('yargs');

var argv = yargs
	.options({
		a: {
			demand: true,
			alise: 'address',
			describe: 'address to fetch the weather for',
			string: true
		}
	})
	.help()
	.argv;
console.log(argv);
var encodedAddress = encodeURIComponent(argv.a);


request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	//	console.log(JSON.stringify(body,undefined,2));
	//	console.log(JSON.stringify(response,undefined,2));
	//	console.log(JSON.stringify(error,undefined,2));

	if (error) {
		console.log(`Unable to connect internet`);
	} else if (body.status === 'ZERO_RESULTS') {
		console.log(`Unable to find that address`);
	} else if(body.status === 'OK') {
		console.log(`Address : ${body.results[0].formatted_address}`);
		console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
		console.log(`Longtitide : ${body.results[0].geometry.location.lng}`);
	}
})