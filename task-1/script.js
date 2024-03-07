// Write a code to displays the total number of vowels in the user’s input.

function countVowels()  {
    let userName = prompt("Enter your name :");
    userName = userName.toLowerCase();
    let totalNumOfVowels = 0;
   
    for(let i = 0; i < userName.length; i++)    {
        if(userName[i] === "a" || userName[i] === "e" || userName[i] === "i" ||
           userName[i] === "o" || userName[i] === "u" ) {
           totalNumOfVowels = totalNumOfVowels + 1 ;
        }
    }
    
    return totalNumOfVowels;
}

const totalVowels = countVowels();
console.log(totalVowels);
