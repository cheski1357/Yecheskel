(function(){

    'use strict';

function createAccount(openingBalance){
    return{
        balance : openingBalance,
        preformTransaction: function (amount){
            this.balance+=amount;
        }

    }
}
const account1 = createAccount(100);
const account2 = createAccount(1000);

account1.preformTransaction(100);
account2.preformTransaction(-34);
console.log(account1,account2);
}());

