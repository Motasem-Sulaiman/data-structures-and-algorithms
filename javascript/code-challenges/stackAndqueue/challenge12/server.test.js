const { AnimalShelter, Animal } = require("./animalShelter");

describe("AnimalShelter", () => {
  test("enqueue should add animals to the shelter", () => {
    const shelter = new AnimalShelter();
    const dog = new Animal("dog", "Buddy");
    const cat = new Animal("cat", "Whiskers");

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.dogQueue[0]).toEqual(dog);
    expect(shelter.catQueue[0]).toEqual(cat);
  });

  test('dequeue should return the first dog when preference is "dog"', () => {
    const shelter = new AnimalShelter();
    const dog1 = new Animal("dog", "Buddy");
    const dog2 = new Animal("dog", "Max");
    const cat = new Animal("cat", "Whiskers");

    shelter.enqueue(dog1);
    shelter.enqueue(cat);
    shelter.enqueue(dog2);

    const dequeuedDog = shelter.dequeue("dog");

    expect(dequeuedDog).toEqual(dog1);
  });

  test('dequeue should return null when preference is neither "dog" nor "cat"', () => {
    const shelter = new AnimalShelter();
    const dog = new Animal("dog", "Buddy");
    const cat = new Animal("cat", "Whiskers");

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    const dequeuedAnimal = shelter.dequeue("bird");

    expect(dequeuedAnimal).toBeNull();
  });

});
