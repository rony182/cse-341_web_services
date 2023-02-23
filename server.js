var express = require('express');
var app = express();

app.use('/', require('./routes'));

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});