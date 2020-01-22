let noteData = require('../db/notes');

module.exports = function(app){
    app.get('/api/notes', (req, res) => {
        res.json(noteData);
    });
    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.send('put data in api');
    });
    app.delete('/api/notes', (req, res) => {
        console.log(req.body);
        console.log(noteData);
        let temp = noteData.map(x => {
            if (x.title === req.body.title && x.description === req.body.description){
                return false;
                console.log(x.title);
            } else {
                return x;
            }
        });

        noteData = temp;
        res.send(noteData);
    });
}