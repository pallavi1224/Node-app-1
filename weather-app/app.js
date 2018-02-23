var yargs = require('yargs');

var geoCode = require('./geocode/geocode');
var weather = require('./geocode/weather');
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
geoCode.getGeoAddress(argv.a, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
		weather.getWeather(results.latitide, results.longitiude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
			}
		});
	}
});

weather.getWeather();