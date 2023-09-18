//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
// class EspressoMachine{
//     constructor(espressoType, espressoSize, espressoColor, espressoSpeed, working = false){
       
//         this.type = espressoType
//         this.size = espressoSize
//         this.color = espressoColor
//         this.speed = espressoSpeed
//     }
    
//     machineStart(){
//         if(!working){
//             console.log("Machine is starting!");
//             working = true;
            
//         } 
//     }
// }
// let esresso = new EspressoMachine('ayayay', 'medium', 'red', 'super fast');


class Account{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit(value){
        return this.balance += value;
    };

    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}

const storage = [];
storage.push(new Account('Sean'), new Account('Brad'), new Account('Georges'));
console.log(storage);

storage.forEach(account => account.credit(1000));