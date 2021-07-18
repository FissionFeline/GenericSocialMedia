const express = require('express');
var index_router = require('./routes/index');
const app = express();
//ugh 

app.use(express.json());

app.use('/', index_router);
app.listen(4000, () => {
    console.log('listening on port 4000');
})