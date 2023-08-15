//Create a dog object that has four properties and three methods

let dog = {
    race: 'labradog',
    color: 'white',
    size: 'big',
    age: '5',

    woof: function(){
        alert('WOOF!')
    },

    wiggle: function(){
        alert("Your dog wiggles it's tail happily!")
    },

    catSpotted: function(){
        alert("Cat spotted, engaging chase method protocol alpha, GROWLL!!!!!");
    }
}

dog.woof();
dog.wiggle();
dog.catSpotted();