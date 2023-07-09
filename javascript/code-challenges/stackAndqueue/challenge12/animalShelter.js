class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog' && this.dogQueue.length > 0) {
      return this.dogQueue.shift();
    } else if (pref === 'cat' && this.catQueue.length > 0) {
      return this.catQueue.shift();
    } else if (pref !== 'dog' && pref !== 'cat') {
      return null;
    } else {
      return null;
    }
  }
}
module.exports = { Animal, AnimalShelter };
