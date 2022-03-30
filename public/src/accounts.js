// Objective: create a function that will return an accounts info from the accounts array when given a account Id
function findAccountById(accounts, id) {
  //use .find() to loop through the accounts data to see which account meets the id given 
  return accounts.find((account) => account.id === id);
  
}


// Objective: create a function that will return the accunts sorted by last name
function sortAccountsByLastName(accounts) {
  // use the .sort() method to loop through the accounts and compare the last names to get them in order 
  return accounts.sort((accountA, accountB) => 
  (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1))
}

// Objective: create a function that will return the number of times an account has created a 'borrow' record
function getTotalNumberOfBorrows(account, books) {
  // establish counter for the amount of times that account has borrowed a book, initially 0
  let count = 0;
  //loop through books array to find when the selected book's borrow.id is equal to the given account's id. if so, add to the counter 
  books.forEach((book) => book.borrows.forEach((borrow) => {
    if (account.id === borrow.id) {
      count++;
    }}));
  return count;

}

// Objective: create a function that will return all of the books taken out by a given account with the author embedded
function getBooksPossessedByAccount(account, books, authors) {
  //establish array of books borrowed by account
 const booksCheckedout = [];

  // use .map() to loop through the books array to find when a selected book is borrowed by the given account and not returned yet. Push that book into the array.
  books.map(book => {
    if (book.borrows.find(item => item.id === account.id && !item.returned)){
      booksCheckedout.push(book);
    }
  })
  // this is where we will embed the author for each book. loop through the array of books
  booksCheckedout.forEach(book => {
    //loop throught he authors array to find when the selected book's authorId matches an authors id
    const bookAuthor = authors.find(writer => writer.id === book.authorId);
    // embedded the author into the selected book using bracket notation
    book['author'] = bookAuthor;
  })

return booksCheckedout;

  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
