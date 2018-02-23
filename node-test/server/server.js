var express = require('express');

var app = express();

app.get('/', (req, res) => {
	//	res.status(404).send("Helllo world");
	//	res.send("Helllo world");
	res.status(404).send({
		error: 'Page not found',
		name: 'Todo app v1.0'
	})
})

app.get('/users', (req, res) => {
	res.send([{
		name: 'pallavi',
		age: 25
	}, {
		name: 'prasad',
		age: 28
	}, {
		name: 'prapall',
		age: 2
	}])
});


app.listen(3000);

module.exports.app = app;