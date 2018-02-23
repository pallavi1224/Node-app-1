//console.log("Notes App starting...");
const fs = require('fs');

var fetchNote = () => {
	try {
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	} catch (e) {
        return [];
	}
}

var saveNote = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
	var notes = fetchNote();
	var note = {
		title,
		body
	}

	var dulicateNote = notes.filter((note) => note.title === title);

	if (dulicateNote.length === 0) {
		notes.push(note);
		saveNote(notes)
		return note;
	}
}

var getAll = () => {
	return fetchNote();
}

var getNote = (title) => {
	var notes = fetchNote();
	var filterNote = notes.filter((note) => note.title === title);
	return filterNote[0]; 
}

var removeNote = (title) => {
	var notes = fetchNote();
	var filterNote = notes.filter((note) => note.title !== title);
	saveNote(filterNote);
	return notes.length !== filterNote.length
}

var logNote = (note) => {
	console.log('--');
	console.log(`Note Title : ${note.title}`);
	console.log(`Note Body : ${note.body}`);
}


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};