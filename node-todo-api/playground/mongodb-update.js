const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

//	db.collection('Users').findOneAndUpdate({
//			name: 'prasad'
//		}, {
//			$set : {
//				age : 28
//			}
//		}, {
//		returnOriginal : true
//	}).then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs));
//	}, (err) => {
//		console.log('Unable to fetch todos', err)
//	});
	
	db.collection('Users').findOneAndUpdate({
			name: 'prasad'
		}, {
			$inc : {
				age : 1
			}
		}, {
		returnOriginal : true
	}).then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs));
	}, (err) => {
		console.log('Unable to fetch todos', err)
	});


	//	db.close();
});