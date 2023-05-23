// Update previous 'readingStatus(books)' function and add logic into it: if book is read by the author, display how many days ago he finished it.
// - Use object getter method name it 'daysAgo' and return string: `{x} days ago`

function readingStatus(books){
    for(const book of books){
        const {title, author, readingStatus, finishedDate} = book;

        console.log(`Title: ${title}`);
        console.log(`Author: ${author}`);
        console.log(`Reading Status: ${readingStatus}`);
    
        if(readingStatus && finishedDate){
            const daysAgo = getDaysAgo(finishedDate);
            console.log(`Finished ${daysAgo} days ago`);
        }
        
        console.log(`----------------------------`);
    
    }


    
}

function getDaysAgo(finishedDate){
    const today = new Date();
    const finished = new Date(finishedDate);
    const timeDiff = Math.abs(today.getTime() - finished.getTime());
    const daysAgo = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
}

const books = [
    { title: 'Book 1', author: 'Author 1', readingStatus: true, finishedDate: '2023-05-15' },
    { title: 'Book 2', author: 'Author 2', readingStatus: false },
    { title: 'Book 3', author: 'Author 3', readingStatus: true, finishedDate: '2023-05-10' }
  ];
  
  readingStatus(books);

