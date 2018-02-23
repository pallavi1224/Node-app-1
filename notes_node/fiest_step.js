console.log("Notes App starting...");

var addNote = (title,body) => {
	console.log('Adding Note ',title,body);
 }

var getAll = () => {
	console.log('Get all Notes');
}

var getNote = (title) => {
	console.log('Getting the node',title);
}

var removeNote = (title) => {
	console.log('Removing the node',title);
}


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};