// write a simple JavaScript code that goes through a list of an array and adds each item to a string,
// showing the growing string each time it adds an item?

let arrayItems = ["a","b","c","d"];
let arrayContainer = "";
for( let i = 0; i < arrayItems.length; i++ )    {
    arrayContainer = arrayContainer + "  " + arrayItems[i];
    console.log(arrayContainer)
}