var express = require('express');
var path = require('path');
const app = express();

app.use('/static', express.static('public'));

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'));
});

app.get('/online-store', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/online-store.html'));
});

app.get('/mission-statement', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/mission-statement.html'));
});

app.get('/shopping-cart', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/shopping-cart.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/contact-us.html'));
});

app.listen(5051);