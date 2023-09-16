class CoffeeShop {

    _item = ""

    constructor(name, menu) {
        this.name = name;
        this.orders = [];
        this.menu = manu;
    }

    
    addOrder(item) {
        if(this.menu[item.name]) {
            this.orders.push(item.name)
        } else {
            return `This item is currently unavailable! ${this.name}s coffee shop does not sell ${item.name}`
        }
    }

    fulfillOrder(item){
        if (this.orders !== 0){
            console.log(`The ${item.name} is ready!`)
        }else {
            console.log(`All orders have been fulfilled!`)
        }

        return this.orders
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

