'use strict'

class CoffeeShop {
    

    _item = ""
   

    constructor(name, menu) {
        this.name = name;
        this.orders = [];
        this.menu = menu;
    }

    
    
    addOrder(item) {
        for(let i =0; i < this.menu.length; i++){
            if(this.menu[i].name === item){
                this.orders.push(item)
                return this.orders
            }
         }
        return `This item is currently unavailable! ${this.name}s coffee shop does not sell ${item}`
}

    fulfillOrder(){
        if (this.orders.length !== 0){
            let item = this.orders.shift();
            return `The ${item} is ready!`;
        }
        console.log(`All orders have been fulfilled!`)
    }

    dueAmount(){
        let sum = 0;
        orders.forEach(element => {
            for (let i = 0; i < this.menu.length; i++) {
                if (element === this.menu[i].name) {
                    sum += this.menu[i].price;
                    break;
                }
            }
        });
        return sum;
    }

    cheapestItem(){
       return  this.menu.reduce((acc,curr)=> acc < curr.price ? acc  : curr.price);
    }

    drinksOnly(){
        return  this.menu.reduce((acc,item)=>{
            if(item.type === "drink"){
                acc.push(item.name);
            }
        return acc;
        },[] )
    }

    foodOnly(){
        return  this.menu.reduce((acc,item)=>{
            if(item.type === "food"){
                acc.push(item.name);
            }
            return acc;
        },[] )
    }

}

menu = [
    {
      name: 'coca_cola',
      type: 'drink',
      price: 20,
    },
    {
      name: 'pizza',
      type: 'food',
      price: 30,
    },
    {
      name: 'cheese',
      type: 'food',
      price: 18,
    },
    {
      name: 'coffee',
      type: 'drink',
      price: 25,
    },
  ];
  
  const Jazzve = new CoffeeShop('Jazzve', menu)
  console.log(  Jazzve.addOrder("coffee"))
console.log(Jazzve.dueAmount())
console.log(Jazzve.drinksOnly());
console.log(Jazzve.foodOnly());
