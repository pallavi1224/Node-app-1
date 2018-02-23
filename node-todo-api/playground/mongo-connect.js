const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	//
	//   db.collection('Todos').insertOne({
	//     text: 'Something to do',
	//     completed: false
	//   }, (err, result) => {
	//     if (err) {
	//       return console.log('Unable to insert todo', err);
	//     }
	//  
	//     console.log(JSON.stringify(result.ops, undefined, 2));
	//   });

	// Insert new doc into Users (name, age, location)
	db.collection('Users').insertOne({
		name: 'prasad',
		age: 25,
		location: 'Philadelphia'
	}, {
		name: 'prasad',
		age: 25,
		location: 'Philadelphia'

	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user', err);
		}

		console.log(result.ops);
	});

	db.close();
});