//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log((`${this.name} can speak`));
    }
}

class Cat extends Animal{
    constructor(name, breed, color){
        super(name);
        this.breed = 'syamisi';
        this.color = 'gray';
    }
}

class Chicken extends Cat{
    constructor(name, breed, color, skinType){
        super(name, breed, color);
        this.skinType = skinType;
    }
}

let chickenWings = new Chicken('rocky', 'halfhawkhalfpidgeon', 'navy blue', 'feathers');
