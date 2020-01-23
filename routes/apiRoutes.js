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
        //console.log(req.body);
        //console.log(noteData);
        let temp = noteData.filter(x=>!x.title.includes(req.body.title) && !x.description.includes(req.body.description));
        noteData = temp;
        res.send(noteData);
    });
}