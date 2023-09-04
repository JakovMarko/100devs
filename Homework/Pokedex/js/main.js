// deckId='';
// requestNewDeck();

// let streak = {
//     lastWinner:''
// };
// document.querySelector('.winStreak1').textContent = localStorage.getItem('Player1WinStreak');
// document.querySelector('.winStreak2').textContent = localStorage.getItem('Player2WinStreak');

// document.querySelector('.requestNewDeck').addEventListener('click', requestNewDeck)

// // give the player option to request a new deck with requestNewDeck
// function requestNewDeck(){
//     fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data);
//             deckId = data.deck_id;
//         })
//         .catch(err => {
//             console.log(`error ${err}`);
//         })
// }

// document.querySelector('.playGame').addEventListener('click', playGame);

// document.querySelector('.clearHistory').addEventListener('click', clearMatchHistory);

// function clearMatchHistory(){
//     localStorage.clear();
//     document.querySelector('.winStreak1').textContent = 0;
//     document.querySelector('.winStreak2').textContent = 0;
// }

// function playGame(){
    
//     fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 document.querySelector('.player1Card').src = data.cards[0].image;
//                 document.querySelector('.player2Card').src = data.cards[1].image;

//                 let player1Value = determineCardValue(data.cards[0].value);
//                 let player2Value = determineCardValue(data.cards[1].value);
                
//                 determineWinner(player1Value, player2Value, data.remaining);
//                 trackScore(player1Value, player2Value, streak);
            
//             })

//         function trackScore(player1, player2, streak){
//             let player1Count = 0;
//             let player2Count = 0;
            
//             if(!localStorage.getItem('Player1WinStreak')){
//                 localStorage.setItem('Player1WinStreak', 0)
//             }

//             if(!localStorage.getItem('Player2WinStreak')){
//                 localStorage.setItem('Player2WinStreak', 0)
//             }

//             if(player1 > player2){
//                 if(streak.lastWinner == 'player1'){
//                     player1Count = +localStorage.getItem('Player1WinStreak');
//                     player1Count += 1;
//                     localStorage.setItem('Player1WinStreak', player1Count)
//                 } else{
//                     streak.lastWinner = 'player1';
//                 }
//             } else if (player1 < player2){
//                 console.log('player 2 wins');
//                 if(streak.lastWinner == 'player2'){
//                     player2Count = +localStorage.getItem('Player2WinStreak');
//                     player2Count += 1;
//                     localStorage.setItem('Player2WinStreak', player2Count)
//                 } else{
//                     streak.lastWinner = 'player2';
//                 }
//         }
//     }


//         function determineCardValue(val){
//                 if(val === 'JACK'){
//                     return 11;
//                 } else if(val == 'QUEEN'){
//                     return 12;
//                 } else if (val=='KING'){
//                     return 13;
//                 } else if (val == 'ACE'){
//                     return 14;
//                 } else {
//                     return Number(val);
//                 }
//             }


//         function determineWinner(player1Value, player2Value, remainingCards){
//             if(player1Value > player2Value){
//                 document.querySelector('.resultInput').textContent = 'PLAYER 1 WINS'
                
//             } else if(player1Value < player2Value){
//                 document.querySelector('.resultInput').textContent = 'PLAYER 2 WINS'

//             } else {
//                 document.querySelector('.resultInput').textContent = 'ITS A DRAW'

//             }

//             if (remainingCards < 4){
//                 requestNewDeck()
//             }}
//             console.log(localStorage.getItem('Player1WinStreak'));
//             document.querySelector('.winStreak1').textContent = localStorage.getItem('Player1WinStreak');
//             document.querySelector('.winStreak2').textContent = localStorage.getItem('Player2WinStreak');

// }

fetch(`https://pokeapi.co/api/v2/pokemon/charizard/`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        document.querySelector('.player1Card').src = data.sprites.other['official-artwork'].front_default;
    })