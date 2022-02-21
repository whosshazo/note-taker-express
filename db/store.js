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
}
