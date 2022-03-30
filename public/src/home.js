// Objective: create the function to return the amount of books in library 
function getTotalBooksCount(books) {
  return books.length;
}

// Objective: create the function to return the amount of accounts in the library
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// Objective: create the function to return the total number of books currently borrowed from the library
function getBooksBorrowedCount(books) {

  // establish empty array to find which books are currently borrowed
  let total = [];

  //loop through the books to see if the status of that book is checked out 
  books.forEach((book)=>{
    let currentlyBorrowed = book.borrows.filter((borrow) => {
      if(borrow.returned === false){
        return borrow
      }
    })
    //for every book we looped through, if the book is not returned, .push(book) into the array
    if (currentlyBorrowed.length > 0) {
      total.push(book)
    }
  })

  // return the total number of the books not the array of books so using .length() we get the total number 
  return total.length;
}

// helper function to sort and slice for the top 5 results for following 3 functions 
function _sortedNSliced(array) {
    let result = array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
    return result;
}

// Objective: create the function to return an ordered list the top 5 most common genres in the librarys book database
function getMostCommonGenres(books) {

  //establish empty object to enter in genres and their counts
let gen = {};
//loop through each book, if selected book genre is in object "gen", add to count. If book genre in not in object, add in book genre with an initial count of 1
books.forEach(book => {
  if (gen[book.genre]) {
    gen[book.genre]++;
  } else {
    gen[book.genre] =1;
  }
});
// using the Object.entries() method we can return an array of the objects [key, value] pairs. Which in this case would be the genres and counts.
const results = Object.entries(gen).map(([name,count])=> {
return { name, count };
})
//helper function used to return top 5 results
return _sortedNSliced(results);
}
  
  
// Objective: create the function to return an ordered list of the top 5 most popular books in library database
function getMostPopularBooks(books) {
  //establish empty array to enter popular books
  const results = [];
  //loop through books using the .reduce() and .push() method to return the book title and amount of times book is borrowed into the established array
  const borrowed = books.reduce((acc,book)=> { 
    results.push({name: book.title, count: book.borrows.length});
  })
  // helper function to return top 5 results
  return _sortedNSliced(results);
}

// Objective: create the function to return an ordered list of the top 5 most popular authors
function getMostPopularAuthors(books, authors) {

  //establish empty array to enter popular authors
  const popularAuth = [];
  // loop through the authors and create a selectedAuthor object for each that has the authors first and last name and initial count of 0
  authors.forEach((author) => {
    let selectedAuthor = {name: `${author.name.first} ${author.name.last}`, count: 0};

  // loop through the books, if the author of the selected book = the author.id, add the amount of times the book was borrowed to the count 
  books.forEach((book) => {
      if (book.authorId === author.id) {
        selectedAuthor.count += book.borrows.length}

      })
      //insert the selectedAuthor object into the popularAuth array
      popularAuth.push(selectedAuthor)
    })
  // helper fucntion to return top 5 results
  return _sortedNSliced(popularAuth);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
