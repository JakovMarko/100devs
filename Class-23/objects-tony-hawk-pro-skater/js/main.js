//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProScater(firstName, lastName, skateColor, age, speed, balance, skill){
    this.firstName = firstName;
    this.lastName=lastName;
    this.skateColor=skateColor;
    this.age=age;

    this.speed = function(){
        console.log(`Your characters speed is: ${speed}`);
    };

    this.skill = function(){
        console.log(`Your characters speed is: ${skill}`);
    };

    

}

let tony = new ProScater('Tony', 'Hawk', 'purple', 'old', 'not so fast any more', 'good', 'very skilled');