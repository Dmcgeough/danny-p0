
function buyFunction() {
    document.querySelector("#buy-button").innerHTML = "Added to Cart!";
}

function addToCart() {
    
}


// create an array that isn't hard coded with values that can be changed with above function to be true or false which in turn
// would represent whether the text inside of the button says 'bought' or 'buy'. Following creating that function after building
// the correct array I would need to create another function that will take the book title and book price from the array and
// inject that into a table in order to show the book title and its price in the shopping cart page after it is clicked on in
// the store page. A final bit of javascript that it would be helpful to add would be a loop of some sort to add up all of the 
// books 'bought' and to figure out a way to add them all up and put them into a total price table data element on the shopping
// cart page.

var book = [title, author, price];
var book1 = ["The Girl with the Dragon Tattoo", "Stieg Larsson", 7.99 ];
var book2 = ["Never Go Back", "Lee Child", 7.99];
var book3 = ["Best Served Cold", "Joe Abercrombie", 13.99];
var book4 = ["Cronkite", "Douglas Brinkley", 19.99];
var book5 = ["50 Shades of Grey", "E. L. James", 9.99];
var book6 = ["The President is Missing", "Bill Clinton and James Patterson", 17.99];
var book7 = ["Shelter in Place", "Nora Roberts", 14.99];
var book8 = ["The Soul of America", "Jon Meacham", 17.99];
var book9 = ["The Fallen", "David Baldacci", 14.99];
var book10 = ["Something in the Water", "Catherine Steadman", 13.99];
var book11 = ["The Grey Ghost", "Clive Cussler", 13.99];
var book12 = ["The Death of Mrs. Westaway", "Ruth Ware", 12.99];

var bookArray = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12];

