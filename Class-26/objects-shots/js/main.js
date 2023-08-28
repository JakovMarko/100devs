//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink(){
    let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks);
        document.querySelector('img').src = data.drinks[0].strDrinkThumb;
        document.querySelector('h2').textContent = data.drinks[0].strDrink;
        document.querySelector('h3').textContent = data.drinks[0].strInstructions;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}




