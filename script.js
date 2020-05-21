/*

Write a function called add7 that takes one number and returns that number + 7.

Write a function called multiply that takes 2 numbers and returns their product.

Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

Write a function called lastLetter that takes a string and returns the very last letter of that string:
    lastLetter("abcd") should return "d"
*/

function add7(x){
    return x+7;
}
console.log(add7(7));


let multiply = (x,y) => x*y;
console.log(multiply(3,11));


let capitalize = (string) => {
    string = string.toLowerCase();
    let firstLetter = string.substring(0,1).toUpperCase()
    return firstLetter + string.substring(1);
}  
console.log(capitalize("pOOchiE"))

let lastLetter = (string) => string.charAt(string.length-1);
console.log(lastLetter("abcd"))

