const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./data');
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/data', cors(), (req, res) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(data);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(port, () => {
    console.log('server running at http://localhost:3000');
});