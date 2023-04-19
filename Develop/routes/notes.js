
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


notes.get('/', (req, res) => {
    console.log(`${req.method} request received for notes :)`);
    readFromFile('./db/db.json')
    .then((data) => {
        res.json(JSON.parse(data));
    });
});

notes.post('/', (req, res) => {
    console.log(`${req.method} request received to add note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {title,text,id: uuid(),};

        readAndAppend(newNote, './db/db.json');
        res.json(`noted!`);
        
    } else {
        res.errored(`Unable to add note :(`)
    }
});

notes.delete('/:id', (req, res) => {
    console.log(`${req.method} requested to delete note.`);
    
    const id = parseInt(req.params.id);
    console.log('note id');
});



module.exports = notes;