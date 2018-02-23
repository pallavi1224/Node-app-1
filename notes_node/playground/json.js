//var obj = {
//	name:'pallavi'
//}

//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);


//var personString = '{"name":"pallavi","age":25}';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

var fs = require('fs');
const originalNote = {
	title: "pallavi",
	body: "Node js sample"
}

var originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteStr);

var noteString = fs.readFileSync('notes.json');
var notes = JSON.parse(noteString);
console.log(typeof notes);
console.log(notes.title);

