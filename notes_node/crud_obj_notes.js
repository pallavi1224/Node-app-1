console.log("Notes App starting...");
const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	}
	try {
		var noteString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
	} catch (e) {

	}

	var dulicateNote = notes.filter((note) => note.title === title);

	if (dulicateNote.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
		console.log('Adding Note ', title, body);
	}
}

var getAll = () => {
	console.log('Get all Notes');
}

var getNote = (title) => {
	console.log('Getting the node', title);
}

var removeNote = (title) => {
	console.log('Removing the node', title);
}


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};