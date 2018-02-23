console.log("Starting OS Module App...");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//console.log(_.isString(true));
//console.log(_.isString('NodeJS'));

var filterArray = _.uniq(['pallavi','prasad',1,2,'pallavi',1,2,'prasad',true,false,3,4]);
console.log(filterArray);