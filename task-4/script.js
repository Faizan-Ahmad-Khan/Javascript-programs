// Write a code that prompts the user to enter their name and then constructs a username.
// The username is created by appending an '@' symbol, followed by the user's name in lowercase,
// and then the length of the name.
let Name = prompt("Enter your name : ");
let userName = "@" + Name.toLowerCase() + Name.length;
alert(userName);