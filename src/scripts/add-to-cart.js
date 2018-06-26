var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var feb = db.db("bookstoredb");
  var bookArray = [
    { id: 'book1', title: 'The Girl with the Dragon Tattoo', price: '$7.99'},
    { id: 'book2', title: 'Never Go Back', price: '$7.99'},
    { id: 'book3', title: 'Best Served Cold', price: '$13.99'},
    { id: 'book4', title: 'Cronkite', price: '$19.99'},
    { id: 'book5', title: '50 Shades of Grey', price: '$9.99'},
    { id: 'book6', title: 'The President is Missing', price: '$17.99'},
    { id: 'book7', title: 'Shelter in Place', price: '$14.99'},
    { id: 'book8', title: 'The Soul of America', price: '$17.99'},
    { id: 'book9', title: 'The Fallen', price: '$14.99'},
    { id: 'book10', title: 'Something in the Water', price: '$13.99'},
    { id: 'book11', title: 'The Grey Ghost', price: '$13.99'},
    { id: 'book12', title: 'The Death of Mrs. Westaway', price: '$12.99'}
  ];
  feb.collection("books").insertMany(bookArray, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

// function addToCart() {
//     var t = bookArray[i].title;
//     var p = bookArray[i].price;
// }



// // create an array that isn't hard coded with values that can be changed with above function to be true or false which in turn
// // would represent whether the text inside of the button says 'bought' or 'buy'. Following creating that function after building
// // the correct array I would need to create another function that will take the book title and book price from the array and
// // inject that into a table in order to show the book title and its price in the shopping cart page after it is clicked on in
// // the store page. A final bit of javascript that it would be helpful to add would be a loop of some sort to add up all of the 
// // books 'bought' and to figure out a way to add them all up and put them into a total price table data element on the shopping
// // cart page. The function to add up price would be fairly straight forward. However, the function that would require me to
// //pull values from an Array and then inject those values using JavaScript into a different HTML element is going to be tough.
// //var book = [title, price];
// var book1 = ["The Girl with the Dragon Tattoo", 7.99 ];
// var book2 = ["Never Go Back", 7.99];
// var book3 = ["Best Served Cold", 13.99];
// var book4 = ["Cronkite", 19.99];
// var book5 = ["50 Shades of Grey", 9.99];
// var book6 = ["The President is Missing", 17.99];
// var book7 = ["Shelter in Place", 14.99];
// var book8 = ["The Soul of America", 17.99];
// var book9 = ["The Fallen", 14.99];
// var book10 = ["Something in the Water", 13.99];
// var book11 = ["The Grey Ghost", 13.99];
// var book12 = ["The Death of Mrs. Westaway", 12.99];

// var bookArray = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12];
// function Books (data) {
//     this.title = data.title
// }
