const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();

nunjucks.configure('src/views',  {
    autoescape: true,
    express: app
});

app.listen(5051);

app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('styles'));

app.use('/', express.static('images'));

app.use(express.static('src/scripts'));

app.route('/')
.get((req, res) => {
    res.render('index');
});

app.route('/online-store')
.get((req, res) => {
    res.render('online-store');
});

app.route('/mission-statement')
.get((req, res) => {
    res.render('mission-statement');
});

app.route('/contact-us')
.get((req, res) => {
    res.render('contact-us');
        });