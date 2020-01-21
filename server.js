const express = require('express');
const path = require('path');
const app = express();

var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended: true}));
app.use(express.json());


//router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


//listener
app.listen(PORT, () => {
    console.log(`listening from port http://localhost:${PORT}`)
})
