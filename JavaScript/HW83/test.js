(async function () {
    'use strict';

    const request = await fetch('test.json');
    const theItems = await request.json();
    console.log(theItems)

    const theCustomer = $('#customer');

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    let theItem = new Item();
    for (let i = 0; i < theItems.length; i++) {
        theItems[i].items.forEach(element => {

            element.total = element.total / element.quantity;

            theItem = new Item(element.item, element.total, element.quantity);

            console.log(theItem)
            theCustomer
            
                .append(`<div>Items: </div>${element.item}`)
                .append(`<div>Quantity: </div>${element.quantity}`)
                .append(`<div>Price per unit: </div>${element.total}`)



        });
    }
    class Order {
        constructor(customerName, customerAddress, itemsArray) {
            this.customerName = customerName;
            this.customerAddress = customerAddress;
            this.itemsArray = itemsArray;
        }

        get theTotalCost() {

            return 'the sum of, the product of the Quanity and price per unit, of all orders';

        }

    }

  
 

    theItems.forEach(element => {
      let  theOrders = new Order(element.customer, element.address, element.items)
           
        console.log(theOrders)

        theCustomer.append(`<div>Customer: </div>${element.customer}`)
                   .append(`<div>Address: </div>${element.address}`)
                   .append(`<div>totalCost: </div>${theOrders.theTotalCost}`)







    });

























}())