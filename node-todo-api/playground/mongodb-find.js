const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	
	db.collection('todos').find().toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs));
	}, (err) => {
       console.log('Unable to fetch todos',err)
	});
	
	
	db.collection('todos').find().count().then((count) => {
     console.log(`Todos count: ${count}`);
   }, (err) => {
     console.log('Unable to fetch todos', err);
   });
	
	db.collection('todos').find({complete:true}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs));
	}, (err) => {
       console.log('Unable to fetch todos',err)
	});
	
	db.collection('Users').find({name:"prasad"}).toArray().then((docs)=>{
		console.log(docs);
	})
	

//	db.close();
});