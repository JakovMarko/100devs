//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let sumArray = arr.reduce((total, item) => total+item,0);
console.log(sumArray);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function numbersSquared(arr){
    return arr.map(item => Math.pow(item, 2));
}
console.log(numbersSquared([1,2,3,4,5,6,7]));

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    return str.split('').reverse().join('');
}
console.log(reverseStr('jebaited'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isAPalindrome(str){
    let strReverse = str.split('').reverse().join('');
    console.log(str);
    return strReverse == str ? 'Is a palindrome' : 'Is not a palindrome'
}

console.log(isAPalindrome('hhhhh'));

