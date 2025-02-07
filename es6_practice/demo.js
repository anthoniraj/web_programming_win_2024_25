const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", count: 2 },
    { id: 2, title: "The Book of Secrets", author: "Osho", count: 0 },
    { id: 3, title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", count: 3 },
    { id: 4, title: "The Inner Journey", author: "Osho", count: 1 }
];
let borrowedBooks = []; // Stores borrowed books

// console.log(books)

function displayBooks() {
    console.log("\nAvailable Books:");
    for (let i = 0; i < books.length; i++) {
        if (books[i].count>0){
            console.log(`${books[i].id}: ${books[i].title} by ${books[i].author} (Available: ${books[i].count})`);
        }
    }
}
function borrowBook(bookId) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === bookId) {
            if (books[i].count > 0) {
                books[i].count--; // Reduce count when borrowed
                borrowedBooks = [...borrowedBooks, books[i]]; // Spread operator
                console.log(`Borrowed: ${books[i].title} (Remaining: ${books[i].count})`);
            } else {
                console.log(`Sorry, ${books[i].title} is currently not available.`);
            }
            return;
        }
    }
    console.log("Book not found. Try again.");
}
console.log(borrowBook); 