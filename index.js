//Default constructor -- If your class is a base class, the default constructor is empty
class RailwayForm {
  //constructor(){}
  submit() {
    alert(" form submitted ");
  }
  cancel() {
    alert(" form cancelled ");
  }
}
let harryForm = new RailwayForm();
let rohanForm = new RailwayForm();
harryForm.submit();

//Parameterized Constructor
class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
const animal1 = new Animal("monkey", "brown");
const animal2 = new Animal("dog", "black");
console.log(animal1.name);
console.log(animal2.color);

//copy constructor
