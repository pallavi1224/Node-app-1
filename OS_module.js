console.log("Starting OS Module App...");

const fs =require('fs');
const os =require('os');
const notes = require('./notes.js');

const res = notes.addNote();
console.log(res); 

console.log('Result : '+ notes.add(9,-2));

var user_info = os.userInfo();
// console.log(user_info);
//fs.appendFile('Greeting.txt','Hello '+ user_info.username +'!');
//fs.appendFile('Greeting.txt',`Hello ${user_info.username} You are ${notes.age} old`);