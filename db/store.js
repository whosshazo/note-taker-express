const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  readFile() {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeFile(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.readFile().then((notes) => {
      let currentNotes;
      try {
        currentNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        currentNotes = [];
      }
      return currentNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;
    const newNote = { title, text, id: uuidv4() };

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((dummy) => this.writeFile(dummy))
      .then(() => newNote);
  }

  removeNote() {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id != id))
      .then((dummy) => this.writeFile(dummy))
  }
}

module.exports = new Store();
