//Create a constructor with 4 properties and 3 methods

function PizzaConstructor(size, price, addings, order, timeToDeliver, taste){
    this.size = size
    this.price = price;
    this.addings = addings;
    this.order = function (){
        if(order == 'yes'){
            alert('Your order has been confirmed')
        };
    }
    this.timeToDeliver = function(){
        alert(`Time to delived is ${timeToDeliver}`);
    }
    this.taste = function(){
        return('Tastes good!');
    };
}

let pizza = new PizzaConstructor('big', '10$', ['tomatoes', 'bananas'], 'no', '15minutes');

