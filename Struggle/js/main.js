
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

// function uniqueInOrder(iterable){
//     return [...iterable].filter((a, i) => a!==iterable[i-1]);

// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// document.querySelector('button').addEventListener('click', getFetch);

// function getFetch(){
//     const choice = document.querySelector('input').value;
//     const url = `https://api.nasa.gov/planetary/apod?api_key=sr2lFuNlKDeFA3ttfzLRKpUXKdpi1ShKR9cIxmsT&date=${choice}`

//     fetch(url)
//             .then(res => res.json())
//             .then(data =>{
//                 console.log(data);
//                 document.querySelector('img').src = data.hdurl;
//                 document.querySelector('h3').textContent = data.explanation;
//             })



// }

// class MakeCar{
//     constructor(carMake, carModel, carDoors){
//         this.model = carModel,
//         this.doors = carDoors,
//         this.type = carMake
//     }
//     honk(){
//         alert('HONK HONK HONK');
//     }
// }
// let hondaCivic = new MakeCar('honda', 'civic', '4');

// localStorage.clear();

// if (!localStorage.getItem('botScore')){
//     localStorage.setItem('botScore', 0);
// }

// document.querySelector('button').addEventListener('click', addBotScore);

// function addBotScore(){
//     let botScoreVal = Number(localStorage.getItem('botScore'));
//     botScoreVal += 1;
//     localStorage.setItem('botScore', botScoreVal);
// }
// let deckId = '';
// fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         deckId = data.deck_id;
//     })
//     .catch(err => {
//         console.log(`error ${err}`);
//     });


// document.querySelector('button').addEventListener('click', playGame);


// function playGame(){
//     fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         document.querySelector('#player1').src = data.cards[0].image;
//         document.querySelector('#player2').src = data.cards[1].image;
//         let player1Value = getCardValue(data.cards[0].value);
//         let player2Value = getCardValue(data.cards[1].value);

//         if(player1Value > player2Value){
//             document.querySelector('.result').textContent = 'PLAYER 1 WINS!!'
//         } else if (player1Value < player2Value){
//             document.querySelector('.result').textContent = 'PLAYER 2 WINS!!'

//         } else {
//             document.querySelector('.result').textContent = 'ITS A DRAW'

//         }
        

//     })
// }

// function getCardValue(val){
//     if(val =='JACK'){
//         return 11;
//     } else if (val == 'QUEEN'){
//         return 12
//     } else if (val == 'KING'){
//         return 13
//     } else if (val == 'ACE'){
//         return 14
//     } else {
//         return Number(val);
//     }
// }

// function uniqueIterable(iterable){
//     return [...iterable].filter((a,i)=> a !== iterable[i-1]);
// }

// console.log(uniqueIterable('AAAABBBCCDAABBB'));
// console.log(uniqueIterable('ABBCcAD'));
// console.log([1,2,2,3,3], uniqueIterable([1,2,2,3,3]));


// function countBs(str, char){
//     let word = String(str);
//     console.log(word);

//     function findChar(N, result){
//         console.log(N, result);
//         if (N > String(str).length){
//             return result;
//         } else {
//             return word[N] === char ? findChar(N+1, result+1) : findChar(N+1, result);
//         }
//     }
    
//     return findChar(1, 0);

// }


// console.log(countBs('kakkarot', 'k'));

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => 
//         console.log(`error ${err}`));

// fetch(dndwhatever)
//     .then(res => res.json())
//     .then(data => {
//         data.subclass.name
//         .forEach(elem => {
//         // create an element
//         const li = document.createElement('li')

//         // assign some text to the element
//         li.textContent = 'some abilities';

//         // put the element into dom
//         document.querySelector('ul').appendChild(li);})
//     })

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         }
//     })

// function countChars(str, char){
//     let word = String(str);
//     function findChar(N, result){
//         if (N>word.length){
//             return result;
//         } else {
//             return word[N] === char ? findChar(N+1, result + 1) : findChar(N + 1, result);
//         }

//     }
//     return findChar(0, 0);
// }


// console.log(countChars('kakkerlak', 'k'));

// function order(words){
//     return words.split(' ').sort((a,b)=>{
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(' ');
// }

// console.log(order('is2 Thi1s T4est 3a'));

// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// function transportation(data){
//     return data.reduce((obj, item) =>{
//         if(!obj[item]){
//             obj[item] = 0;
//         }

//         obj[item]++;
//         return obj;
//     }, {})
// }

// console.log(transportation(data));

let lists = Array.from(document.querySelector('.mw-category').querySelectorAll('a'));

let de = lists
            .map(item => item.textContent)
            .filter(item => item.includes('de'));
