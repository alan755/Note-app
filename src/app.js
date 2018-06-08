console.log('Staring the Note app..')
 
const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes.js')


var argv = yargs.argv
var command = argv._[0]

if (command === 'add') {
  console.log('Command: add')
  var note = notes.add(argv.title,argv.body)
  if (note) {
    console.log('Note added successfully...!')
  } else {
    console.log('Title is already taken...!')
  }

} else if (command === 'list') {
  console.log('Command: list ')
  notes.list()
} else if (command === 'remove') {
  console.log('command: remove')
  notes.remove(argv.title) 
  console.log('Note with the specified title is removed..!')
} else {
  console.log('Command not recognized')
}

