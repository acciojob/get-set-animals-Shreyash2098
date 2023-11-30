// script.js

//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("Purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

// Example usage:
const myDog = new Dog("Canine");
const myCat = new Cat("Feline");

console.log(myDog.species); // Output: Canine
console.log(myCat.species); // Output: Feline

myDog.makeSound(); // Output: Generic animal sound
myCat.makeSound(); // Output: Generic animal sound

myDog.bark(); // Output: Woof
myCat.purr(); // Output: Purr
