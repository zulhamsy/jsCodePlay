// Factory Design Pattern
function carFactory() {
  this.createCar = function(type, brand) {
    let car;

    if ((/honda/gi).exec(brand)) {
      car = new Honda();
    } else if ((/ford/gi).exec(brand)) {
      car = new Ford();
    } else {
      car = new OtherCar();
    }

    car.type = type,
      car.wheel = 4,
      car.color = 'Black',
      car.define = function() {
        return `${this.brand} - ${this.type} with ${this.color} color`
      };

    return car;
  }
}

const Honda = function() {
  this.brand = 'Honda';
};

const Ford = function() {
  this.brand = 'Ford';
};

const OtherCar = function() {
  this.brand = 'Brandless';
};

// Testing Factory Pattern
const factory = new carFactory();

let mycar = factory.createCar('Z-190', 'i think its ford maybe');

console.log(mycar.define());

// factory pattern berguna utk menyelesaikan project yg menggunakan banyak object dan banyak kesamaan dr objek2 tsb