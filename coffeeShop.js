
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

    fulfillOrder(item){/* imtemi pahy verjum kstugeq */
        if (this.orders !== 0){
            console.log(`The ${item.name} is ready!`)
        }else {
            console.log(`All orders have been fulfilled!`)
        }

        return this.orders
    }
    dueAmount(){
        return this.orders.reduce((sum, price) => sum + this.price,0)
    }

    cheapestItem(){
       return  this.menu.reduce((acc,curr)=> acc < curr.price ? acc  : curr.price);
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
