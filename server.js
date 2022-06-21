const PORT = process.env.PORT || 3001;
const express = require('express');
const fs = require('fs');
const path = require('path');
const { finished } = require('stream');
const { json } = require('stream/consumers');

const app = express();

const finishedNotes = require('./Develop/db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(finishedNotes.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(___dirname, './Develop/public/index.html'));
});

function createNote(body, notesArr) {
    const note = body;
    if (!Array.isArray(notesArr))
    notesArr=[];

    if (notesArr.length === 0)
        notesArr.push(0);

    body.id = notesArr[0];
    notesArr[0]++;

    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        json.stringify(notesArr, null, 2)
    );

    return note;
}

app.post('/api/notes', (req, res => {
    const note= createNote(req.body, finishedNotes);
    res.json(note);
}))


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });