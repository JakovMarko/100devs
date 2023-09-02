let deckId ='';


fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        deckId = data.deck_id;
    })


document.querySelector('button').addEventListener('click', playGame);

function playGame(){
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('#player1').src = data.cards[0].image
            document.querySelector('#player2').src = data.cards[1].image
            let player1Value = getCardValue(data.cards[0].value)
            let player2Value = getCardValue(data.cards[1].value)

            if(player1Value > player2Value){
                document.querySelector('h3').textContent = 'Player 1 Wins'
            } else if(player1Value < player2Value){
                document.querySelector('h3').textContent = 'Player 2 Wins'

            } else {
                document.querySelector('h3').textContent = 'PLAY AGAIN'

            }
        })
        .catch(err =>{
            console.log(`error ${err}`)
        });


}


function getCardValue(val){
    if(val == 'JACK'){
        return 11
    } else if(val == 'QUEEN'){
        return 12
    } else if (val == 'KING'){
        return 13
    } else if (val == 'ACE'){
        return 14
    } else {
        return Number(val);
    }
}