
// const data = ['car','car','car','car','car','car','car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// const transportation = data.reduce((obj, item) => {
//     if(!obj[item]){
//         obj[item] = 0;
//     }

//     obj[item]++;
//     return obj;

// }, {})

// console.log(transportation);

// function smallestInteger(arr){
//     let start = arr[0];
//     let indexLowest = 0;
//     let newArr = arr.forEach((item, index) => { 
//         if(item<start){
//             indexLowest=index;
//             start = item;
//         }
//         console.log(indexLowest) ;
//     });
//     console.log(`Lowest item found at index: ${indexLowest}`)
//     return arr.slice(0,indexLowest).concat(arr.slice(indexLowest+1));
// }

// function smallestInteger(arr){
//     let indexOfMin = arr.indexOf(Math.min.apply(null, arr));
//     return [...arr.slice(0, indexOfMin), ...arr.slice(indexOfMin+1)];
// }

// console.log(smallestInteger([5,3,2,1,4]));
// console.log(smallestInteger([1,2,3,4,5]));
// console.log(smallestInteger([2,2,1,2,1]));
// console.log(smallestInteger([]));

// function filterInPlace(arr, a, b){
//     arr.forEach((item, index) => 
//        (item >= a && item <= b) ? item : arr.splice(index, 1)
//     );
// }
// let array = [1,2,3,4,5,6,7,8,9];
// filterInPlace(array, 3, 6);
// console.log(array);

// function filterInPlace(arr, a, b){
//     arr.forEach((item,index) => (a<=item && item<=b) ? item : arr.splice(index, 1) );
// };
// let array = [1,2,3,4,5,6,7,8,9];
// filterInPlace(array, 3, 6);
// console.log(array);

// inventors.sort((a,b)=> (a.year-a.lived) - (b.year - b.lived) )

// boulevards
/*
const category = document.querySelector(".mw-category");
const lists = Array.from(category.querySelectorAll('a'));

const de = lists.map(item => item.textContent)
                .filter(item => item.includes('de));
*/

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = 

/* 
usersMapped = users.map(user => ({
    fullName = `${user.name} ${user.surname}`,
    id = user.id
}))

 */

// const category = document.querySelector('.mw-category');
// const lists = Array.from(category.querySelectorAll('a'));

// const de = lists.map(item => item.innerText)
//                 .filter(item => item.includes('de'));

// function findSolution(target){
//     function find(current, history){
//         if(current == target){
//             return history;
//         } else if(current > target){
//             return null;
//         } else {
//             return find(current+5, `(${history} + 5)`) || find(current*3, `(${history}*3)`);

//         }
//     }
//     return find (1, "1");
// }

// console.log(findSolution(53))

// function findSolution(target){
//     function find(current, history){
//         if(current == target){
//             return history;
//         } else if (current > target){
//             return null;
//         } else {
//             return find(current + 5, `(${history}+5)`) || find(current*3, `(${history}*3)`)
//         }
//     }
//     return find(1, "1");


// }

// console.log(findSolution(15));

// function validatePin(pin){
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

// console.log(validatePin(1234));
// console.log(validatePin('1234s'));
// console.log(validatePin('sada'));

// const longest = (s1, s2) => [...new Set(s1+s2)]
// let a = "xyaabbbccccdefww"
// let b = "xxxxyyyyabklmopq"

// console.log(longest(a,b));

function uniqueInOrder(iterable){
    return [...iterable];

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));