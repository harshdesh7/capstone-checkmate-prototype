const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});





app.listen(port, function(err){
    console.log('Server started on port', port);
});
