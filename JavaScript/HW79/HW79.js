



class Vehicle{

  constructor (color){
      this.color=color;

  }
  go(speed){
      this.speed=speed;
      console.log(`${this.color} vehicle goes ${this.speed}`)
  }


}

class Plane extends Vehicle {
    constructor(color){
        super(color);
    }
    go(speed){
        this.speed=speed;
        console.log(`${this.color} plane is flying at ${this.speed}`)
    }
}

const v1 = new Vehicle('black');
v1.go(34);
const v2 = new Plane('White');
v2.go(234)



