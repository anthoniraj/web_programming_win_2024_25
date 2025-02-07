export const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", count: 2 },
    { id: 2, title: "1984", author: "George Orwell", count: 1 },
    { id: 3, title: "Atomic Habits", author: "James Clear", count: 3 }
];

export let borrowedBooks = []; // Stores borrowed books

// Function to display books with their available count
export function displayBooks() {
    console.log("\n📚 Available Books:");
    for (let i = 0; i < books.length; i++) {
        console.log(`${books[i].id}: ${books[i].title} by ${books[i].author} (Available: ${books[i].count})`);
    }
}

// Function to borrow a book (reduces count)
export function borrowBook(bookId) {
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
export function showBorrowedBooks(...borrowed) {
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
