const router = require("express").Router();
const store = require("../db/store");

// Get
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// Post
router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString().then((notes) => {
    store
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
});

// Delete
router.delete("./notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

// router.post("/animals", (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = animals.length.toString();

//     if (!validateAnimal(req.body)) {
//       res.status(400).send("The animal is not properly formatted.");
//     } else {
//       const animal = createNewAnimal(req.body, animals);
//       res.json(animal);
//     }
//   });
