(function(){
    'use strict';

    // 1. Write a constructor that creates a vehicle object.
    //  Allow callers to pass in a color which will then be set
    //  as that objects color. Vehicle prototype should also
    //  have a function "go" that takes a speed. When "go" is called,
    //  vehicle should set its speed and log out that it is "now going at speed X".
    //  It should also have a print method that logs a Vehicles color and current
    //   speed.

    function Vehicle(color ){
        this.color=color;
        
    }
    Vehicle.prototype.go= function(speed){
        console.log(`Vehicle speed is ${speed} `);
  }
  Vehicle.prototype.print = function(){
      console.log(`Vehicle color is ${this.color} and speed is${this.go}`)
  }
  const volvo = new Vehicle('black');
  volvo.go(78);
  volvo.print();
  console.log(volvo)
  

}())