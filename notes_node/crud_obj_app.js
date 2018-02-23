//console.log("Starting App.js !...");

const fs = require('fs');
const yargs = require('yargs');
//const notes = require('./crud_obj_notes.js');
const notes = require('./refactor_resue_notes.js');
const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		}
	})
	.command('list', 'List of all Notes')
	.command('read', 'Read a particular Note', {
		title: titleOptions
	})
	.command('remove', 'Remove a particular Note', {
		title: titleOptions
	})
	.help()
	.argv;
var command = argv._[0];

//console.log('Command  : ', command);
//console.log('Yargs',argv);


if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		//		console.log('--');
		//		console.log(`Note Title : ${note.title}`);
		//		console.log(`Note Body : ${note.body}`);
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var noteRead = notes.getNote(argv.title);
	if (noteRead) {
		console.log('Note Found');
		//		console.log('--');
		//		console.log(`Note Title : ${noteRead.title}`);
		//		console.log(`Note Body : ${noteRead.body}`);
		notes.logNote(noteRead);
	} else {
		console.log('Note Not Found');
	}

} else if (command === 'remove') {
	var noteRemove = notes.removeNote(argv.title);
	var message = noteRemove ? 'Note was Removed' : 'Note not Found';
	console.log(message);
} else {
	console.log('Command not recognize');
}