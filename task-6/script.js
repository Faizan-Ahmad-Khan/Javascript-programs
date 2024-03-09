//  write a function that prompts the user to enter their name, splits the name into an array of words, 
// and then capitalizes the first letter of each word? The function should then concatenate the words back together, with each word separated by a space, 
// and return the result. Finally, call this function and print the result to the console?” 
function firstLetterToCapitalLetter() {
let userName = prompt("Enter your name :");
let userNameArray = userName.split(" ");
let result = "";

for(let i = 0; i < userNameArray.length; i++)   {
    let firstLetter = userNameArray[i].charAt(0).toUpperCase();
    let restOfLetters = userNameArray[i].slice(1);
    let word = firstLetter + restOfLetters;
    result = result + " " + word;
   
}
 return result;
}

let totalName = firstLetterToCapitalLetter();
console.log(totalName);
