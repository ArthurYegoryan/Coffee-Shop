class CoffeeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
    }
    orders = [];

    addOrder(item) {
        for(let i =0; i < this.menu.length; i++){
            if(this.menu[i].name === item){
                this.orders.push(item);
                return this.orders;
            }
         }

        return `This item is currently unavailable! ${this.name}s coffee shop does not sell ${item}`;
    }

    fulfillOrder(){
        if (this.orders.length !== 0){
            let item = this.orders.shift();
            return `The ${item} is ready!`;
        }
        return `All orders have been fulfilled!`;
    }

    dueAmount(){
        this.menu.reduce((acc, item) => {
            this.orders.forEach(orderItem => {
                if(item.name === orderItem) {
                    acc += item.price
                }
            })
            return acc;
        },0)
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

const menu = [
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
console.log(Jazzve.addOrder("coffee"))
console.log(Jazzve.dueAmount())
console.log(Jazzve.drinksOnly());
console.log(Jazzve.foodOnly());
