const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let students = [];

// Home route
app.get('/', (req, res) => {
    res.send('Server working 🔥');
});

// CREATE
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send('Student added');
});

// READ
app.get('/students', (req, res) => {
    res.json(students);
});

// UPDATE
app.put('/students/:id', (req, res) => {
    students[req.params.id] = req.body;
    res.send('Updated');
});

// DELETE
app.delete('/students/:id', (req, res) => {
    students.splice(req.params.id, 1);
    res.send('Deleted');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});