// Book Inventory System:
// Design an object named book to represent a book in a library inventory system. Include properties such as title,
// author, ISBN, genre, and availableCopies. Populate the object with data for multiple books in tahe library's collection.

function Book(name, ISBN, author, genre, availabeCopies) {
  this.name = name;
  this.ISBN = ISBN;
  this.author = author;
  this.genre = genre;
  this.availabeCopies = availabeCopies;
}

const Sapien = new Book("sapien", 123, "Noah Hurari", "biology", 50);
const AtomicHabit = new Book(
  "Atomic Habit",
  321,
  "James Clear",
  " personal growth",
  100
);
console.log(Sapien, AtomicHabit);
