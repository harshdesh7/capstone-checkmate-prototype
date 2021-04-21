const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000

//Static Folder of all HTML pages and functionality
app.use(express.static(path.join(__dirname, 'public')));

//Listens for the start of the app
app.listen(port, function(err){
    console.log('Server started on port', port);
});
