const fs = require('fs')

var n = []
var singlenote = {
  title,
  body
}

var fetchnotes = () => {
  try {
    var notestring = fs.readFileSync('note-data.json')
    n = JSON.parse(notestring)
    return n
  
  } catch (e) {
    return []
  }
}
var savenotes = (n) => {
  fs.writeFileSync('note-data.json', JSON.stringify(n))
}

var add = (title, body) => {


  var duplicate = n.filter((singlenote) => singlenote.title === title)
  if (duplicate.length === 0) {
    n.push(singlenote)
    savenotes(n)
    return singlenote
  }

}

var list = () => {
  var not = JSON.parse(fs.readFileSync('note-data.json'))
  console.log('The list of notes are:-\n')
  console.log(n)
}

var remove = (title) => {
    var not = fetchnotes()
    var newnotes = not.filter((singlenote) => singlenote.title !==title)
    savenotes(newnotes)
  }
  

module.exports = {
  add,
  list,
  remove
}

