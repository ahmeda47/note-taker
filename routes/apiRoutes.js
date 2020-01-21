const noteData = require('../db/notes');

module.exports = function(app){
    app.get('/api/notes', (req, res) => {
        res.json(noteData);
    });
    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.send(true);
    });
}