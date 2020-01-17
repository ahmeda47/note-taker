const express = require('express');
const path = require('path');
const app = express();

var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//test server
app.get('/', (req, res) => {
    res.send(`sending info from port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`listening from port http://localhost:${PORT}`)
})