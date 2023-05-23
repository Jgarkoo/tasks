//* */ Write a 'readingStatus(books)' function to display the reading status of the following books.

// - Use array iteration
// - Log each of them separately

function readingStatus(books){
    for(const book of books){
        const {title, author, dateOfRead,} = book;

    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`DateOfRead: ${dateOfRead ? 'Finished' : 'Not Finished'}`);
    console.log(`-----------------`);
    
    }
    
}

const books = [
    { title: 'Book 1', author: 'Author 1', dateOfRead: true },
    { title: 'Book 2', author: 'Author 2', dateOfRead: false },
    { title: 'Book 3', author: 'Author 3', dateOfRead: true }
  ];
  
 
  
  readingStatus(books, books2);

