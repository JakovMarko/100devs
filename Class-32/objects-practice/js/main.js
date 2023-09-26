// // Come up with with a parent class
// // Extend that parent class into two children
// // Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

// class Player{
//     constructor(charName, charClass, charHealth){
//         this.name = charName;
//         this.health = charHealth;
//         this._class = charClass;
//     }

//     get class(){
//         return this._class;
//     }

//     playerDescription(){
//         console.log(`${this.name} is a ${this._class} and has ${this.health}`);
//     }
// }


// class Mage extends Player{
//     constructor(charName, charClass, charHealth, classColor, classSpecialMove){
//         super(charName, charClass, charHealth);
//         this.color = classColor;
//         this.specialMove = classSpecialMove;
//     }

//     get role(){
//         if(this.class == 'mage'){
//             return 'dps';
//         } else if (this.class == 'priest'){
//             return 'healer';
//         }
//     }

// }

// let vaynard = new Mage('Vaynard', 'priest', 100, 'blue', 'fireball');


























// // class Contractor{
// //     constructor(name,role){
// //         this._name = name
// //         this._role = role
// //     }
// //     get name(){
// //         return this._name
// //     }
// //     get role(){
// //         return this._role
// //     }
// //     sayHello(){
// //         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
// //     }
// // }
// // class Front extends Contractor{
// //     constructor(name,role,tech){
// //         super(name,role)
// //         this._tech = tech
// //     }
// //     get tech(){
// //         return this._tech
// //     }
// //     sayHello(){
// //         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
// //     }
// // }
// // class Back extends Contractor{
// //     constructor(name,role,tech){
// //         super(name,role)
// //         this._tech = tech
// //     }
// //     get tech(){
// //         return this._tech
// //     }
// //     sayHello(){
// //         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
// //     }
// // }
// // let bob = new Contractor('Bob','Front-end')
// // let simba = new Front('Simba','Front-end','React')
// // let machi = new Back('The Machine','Back-end','Node')

// // let agency = [bob,simba,machi]

// // for(person of agency){
// //     person.sayHello()
// // }



function fakeBin(x){
    let newArray =  x.split('')
    newArray.forEach((item, index) => {
        if(Number(item) < 5){
            newArray[index] = '0';
        } else {
            newArray[index] = '1';
        }});
    return newArray.join('');
  }

  console.log(fakeBin('45385593107843568'));