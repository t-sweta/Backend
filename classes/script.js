// dont need to use fucntio keyword inclasses ,can directly write fucntion name
// although setPrice is a fucntio but here it is used as a property
// static keyword is associated with class only no need to create an object in order to access this
class Vehicle {
  constructor(name, price, model) {
    this.name = name;
    this.price = price;
    this.model = model;
  }
  set setPrice(price) {
    this.price = price;
  }
  get getPrice() {
    return this.price;
  }
  getModel1() {
    return this.model;
  }
  static fun() {
    console.log("fun");
    // return 0;   if u dont write this it will return undefined as a fucntio for sure returns something
  }
}

let vehicle1 = new Vehicle("Alto", 400000, "2023");
console.log(vehicle1);
vehicle1.setPrice = 20;
console.log(vehicle1);
console.log(vehicle1.getPrice);
console.log(vehicle1.getModel1());

let vehicle2 = new Vehicle("BMW", 10000000, "2022");
console.log(vehicle2);

class Student {
  constructor(name, rollno, group, fatherName) {
    this.name = name;
    this.rollno = rollno;
    this.group = group;
    this.fatherName = fatherName;
  }
}

let strudent1 = new Student(
  "sweta Shreya",
  2110991421,
  26,
  "Raman Kumar Thakur"
);

let student2 = new Student("Sparsh Yadav", 2110991383, 26, "Jitendra Yadav");
console.log(student2);
console.log(strudent1);
// console.log(Student.fun());   cehcek for sttic keyword
class Car extends Vehicle {
  constructor(name, price, model, color, tyres) {
    super(name, price, model); //helps call prent construcotr
    this.color = color;
    this.tyres = tyres;
  }
}
let car1 = new Car("alto", 400000, 2023, "black", 4);
console.log(car1);
