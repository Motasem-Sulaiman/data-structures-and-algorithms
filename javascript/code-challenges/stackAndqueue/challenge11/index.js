const Stack = require("../challenge10/stack");

class pseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    this.stackOne.push(value);
  }
  dequeue() {
    if (this.stackTwo.length === 0) {
      while (this.stackOne.length !== 0) {
        this.stackTwo.push(this.stackOne.pop());
      }
    }
    return this.stackTwo.pop();
  }
}
module.exports = pseudoQueue;
