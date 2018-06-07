console.log('Staring the Note app..')
 
const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes.js')


var argv = yargs.argv
var command = process.argv[2]
if (command === 'add') {
  notes.add(argv.title,argv.body)
} else if(command === 'list') {
console.log('Not yet done')
} else {
console.log('Command not recognized')
}

