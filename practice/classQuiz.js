

(async function () {

    const theCustomer = document.getElementById('customer')

    const response = await fetch('classQuiz.json');
    const data = await response.json();

    console.log(data);

    function totalSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }

    for (let i = 0; i < data.length; i++) {
      
        let theTotal = data[i].items.map(e => e.total);

        const customerName = document.createElement('div');
        console.log(customerName)
        customerName.innerHTML= 
        `<p class="order">Order${i+1}</p><br>
        <div> Name: ${data[i].customer}</div> <br>
         <div> Address: ${data[i].address}</div> <br>
         <div> Total: ${totalSum(theTotal)}</div> <br> <br>
         `
      document.body.appendChild(customerName);
       
        console.log(data[i].customer);
        console.log(data[i].address);

        console.log(totalSum(theTotal));

        console.log(data[i].items);

        data[i].items.forEach((element,a) => {
            console.log(element.item, element.quantity, element.total/element.quantity)
           const theItems = document.createElement('div');
           theItems.innerHTML=
           `<div> Item:${a+1} ${element.item}</div> <br>
           <div> Quantitiy: ${element.quantity}</div> <br>
           <div> Price Per Unit: ${element.total/element.quantity}</div> <br>`
           document.body.appendChild(theItems)
        });

    }


}())