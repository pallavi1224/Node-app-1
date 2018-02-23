const {MongoClient,ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	db.collection('Users').deleteMany({name:'Andrew'}).then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs));
//	}, (err) => {
//       console.log('Unable to fetch todos',err)
//	});
	
//	db.collection('Users').deleteOne({name:'Andrew'}).then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs));
//	}, (err) => {
//       console.log('Unable to fetch todos',err)
//	});
//	
//	db.collection('todos').findOneAndDelete({complete:false}).then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs));
//	}, (err) => {
//       console.log('Unable to fetch todos',err)
//	});
	
	db.collection('Users').findOneAndDelete({
		_id:new ObjectId("5a8ffe260c0be30d30421be4")}).then((docs)=>{
		console.log(docs);
	})
	



//	db.close();
});