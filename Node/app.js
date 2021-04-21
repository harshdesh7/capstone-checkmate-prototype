const express = require('express');
const path = require('path');
// const api = require('./Api')
const app = express();
const port = process.env.PORT || 5000

// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'public', 'base-menu.html'));
//     // console.log('API Key:', api.key);
// });


//Static Folder
app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, function(err){
    console.log('Server started on port', port);
    // console.log('API Key:', api.key);
});
