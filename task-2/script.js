// Write a code that prints the numbers from 1 to 5 and at last find the sum of all the five numbers. 

let sum = 0;
for(let num = 1; num < 6; num++) {
    console.log(`The number is = ${num}`);
    sum = num + sum;
}
console.log(`The total sum of the numbers is = ${sum}`);

