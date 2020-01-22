const noteData = require('../db/notes');

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
        noteData.map(x => {
            if (x.title === req.body.title && x.description === req.body.description){
                x.title.textContent === '' && x.description.textContent === '';
                console.log(x.title);
            }
        });
        res.send('deleted data from api');
    });
}