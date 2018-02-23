var request = require('request');

var getGeoAddress = (address,callback) => {
	var encodedAddress = encodeURIComponent(address);
	
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback(`Unable to connect internet`);
		} else if (body.status === 'ZERO_RESULTS') {
			callback(`Unable to find that address`);
		} else if (body.status === 'OK') {
			callback(undefined,{
				address: body.results[0].formatted_address,
				latitide: body.results[0].geometry.location.lat,
				longitiude: body.results[0].geometry.location.lng
			})
		}
	})
}

module.exports.getGeoAddress = getGeoAddress;