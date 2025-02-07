import readline from "readline";
// Setup input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", count: 2 },
    { id: 2, title: "The Book of Secrets", author: "Osho", count: 2 },
    { id: 3, title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", count: 3 },
    { id: 4, title: "The Inner Journey", author: "Osho", count: 1 }
];
let borrowedBooks = []; // Stores borrowed books

// Function to display books with their available count
function displayBooks() {
    console.log("\n📚 Available Books:");
    for (let i = 0; i < books.length; i++) {
        console.log(`${books[i].id}: ${books[i].title} by ${books[i].author} (Available: ${books[i].count})`);
    }
}

// Function to borrow a book (reduces count)
function borrowBook(bookId) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === bookId) {
            if (books[i].count > 0) {
                books[i].count--; // Reduce count when borrowed
                borrowedBooks = [...borrowedBooks, books[i]]; // Spread operator
                console.log(`✅ Borrowed: ${books[i].title} (Remaining: ${books[i].count})`);
            } else {
                console.log(`❌ Sorry, ${books[i].title} is currently not available.`);
            }
            return;
        }
    }
    console.log("❌ Book not found. Try again.");
}

// Function to show borrowed books & total count
function showBorrowedBooks(...borrowed) {
    if (borrowed.length === 0) {
        console.log("\n📖 No books borrowed yet.");
        return;
    }
    
    console.log("\n📖 Borrowed Books:");
    for (let i = 0; i < borrowed.length; i++) {
        console.log(`${borrowed[i].title} by ${borrowed[i].author}`);
    }
    console.log(`📌 Total Borrowed: ${borrowed.length}`);
}




// Show available books
displayBooks();

const borrowBooks = () => {
    rl.question("\nEnter book ID to borrow (or type 'done' to finish): ", 
        (choice) => {
            if (choice.toLowerCase() === "done") {
                showBorrowedBooks(...borrowedBooks); // Use rest operator
                rl.close();
                return;
            }
            borrowBook(parseInt(choice));
            displayBooks(); // Refresh available books
            borrowBooks(); // Recursive call for next input
    });
};

// Start borrowing process
borrowBooks();