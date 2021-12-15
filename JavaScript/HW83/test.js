(async function () {
    'use strict';

    const request = await fetch('test.json');
    // SL - theItems? Arent these the orders?
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

    // SL - what is this new Item() used for? Why is it created?
    let theItem = new Item();
    for (let i = 0; i < theItems.length; i++) {
        theItems[i].items.forEach(element => {

            element.total = element.total / element.quantity;

            // SL - you create an Item instance for each item, great, but your not storing these in the orders. You just immediately append the data to the dom and throw them away...
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

        // SL - ?
        get theTotalCost() {

            return 'the sum of, the product of the Quanity and price per unit, of all orders';

        }

    }




    theItems.forEach(element => {
      // SL - as above these ar enot going to be Item instances they are the raw item objects we got from JSON.
      let  theOrders = new Order(element.customer, element.address, element.items)

        console.log(theOrders)

        theCustomer.append(`<div>Customer: </div>${element.customer}`)
                   .append(`<div>Address: </div>${element.address}`)
                   .append(`<div>totalCost: </div>${theOrders.theTotalCost}`)







    });

    // SL - nice start but looks like you need more practice...
























}())