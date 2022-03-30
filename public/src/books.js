// Objective: create a function that will return the author object when given a partiular ID
function findAuthorById(authors, id) {
  // use .find() to loop through the authors array to find when an authors ID matches the given ID
  return authors.find((author) => author.id === id);
  
  
}

// Objective: create a function that will return the book object when given a partiular ID
function findBookById(books, id) {
  // use .find() to loop through the books array to find when a books ID matches the given ID
return books.find ((book) => book.id === id);
}

// Objective: create a function that will return an array with 2 arrays: a borrowes books array and a returned books array
function partitionBooksByBorrowedStatus(books) {
  // establish the two empty arrays
  let booksCheckedout =[];
  let booksInStock = [];
  // use .map() to loop through the books array and the .every() method to loop through and see if the selected book has been returned or not. 
  //if the book has been returned add to the booksInStock array. if returned = false add to the booksCheckedout array
  books.map((book)=> book.borrows.every((borrow)=>borrow.returned) ? booksInStock.push(book) : booksCheckedout.push(book));
  // add both arrays into one array
  const bookLog = [[...booksCheckedout], [...booksInStock]];
  return bookLog;
}

// Objective: create a function that will return an array for a book of all borrowers with their information and return status
function getBorrowersForBook(book, accounts) {
  // establish array
  let borrowers = [];
  // use .map() function to loop thrught the given books borrows array
  book.borrows.map(borrow => {
    //loop through the accounts to see when a particular account borrowed the selected book
    let accountFinder = accounts.find(account => account.id === borrow.id);
    // create an object with the account information and if the book is returned. that will be entered into the borrowers array 
    accountFinder = {...accountFinder, returned:borrow.returned};
    borrowers.push(accountFinder);
  });
  //using .slice() to limit to 10 borrowers 
  return borrowers.slice (0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
