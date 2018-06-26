const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const app = express();
const mongoClient = mongodb.MongoClient;

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

mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
  if (err) {
      console.error(err);
      client.close();
  } else 
//   var db = client.db("bookStore");
//   var bookArray = db.collection('books');
  
  
//   [
//     { id: 'book1', title: 'The Girl with the Dragon Tattoo', price: '$7.99'},
//     { id: 'book2', title: 'Never Go Back', price: '$7.99'},
//     { id: 'book3', title: 'Best Served Cold', price: '$13.99'},
//     { id: 'book4', title: 'Cronkite', price: '$19.99'},
//     { id: 'book5', title: '50 Shades of Grey', price: '$9.99'},
//     { id: 'book6', title: 'The President is Missing', price: '$17.99'},
//     { id: 'book7', title: 'Shelter in Place', price: '$14.99'},
//     { id: 'book8', title: 'The Soul of America', price: '$17.99'},
//     { id: 'book9', title: 'The Fallen', price: '$14.99'},
//     { id: 'book10', title: 'Something in the Water', price: '$13.99'},
//     { id: 'book11', title: 'The Grey Ghost', price: '$13.99'},
//     { id: 'book12', title: 'The Death of Mrs. Westaway', price: '$12.99'}
//   ];



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

app.route('/shopping-cart')
.get((req, res) => {
    res.render('shopping-cart');
});

app.route('/contact-us')
.get((req, res) => {
    res.render('contact-us');
        });
    });