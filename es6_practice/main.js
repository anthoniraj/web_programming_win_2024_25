import readline from "readline";
import { displayBooks, borrowBook, borrowedBooks, showBorrowedBooks } from "./library.js";

// Setup input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Show available books
displayBooks();

const borrowBooks = () => {
    rl.question("\nEnter book ID to borrow (or type 'done' to finish): ", (choice) => {
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
