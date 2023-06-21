class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;

    return;
  }
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    if (value === this.head.value) {
      newNode.next = this.head;

      this.head = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      if (value === current.value) {
        newNode.next = current;
        prev.next = newNode;

        return;
      }

      prev = current;

      current = current.next;
    }
    return "no value";
  }
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
    }
    let current = this.head;

    while (current) {
      if (value === current.value) {
        newNode.next = current.next;
        current.next = newNode;

        return;
      }

      current = current.next;
    }
    return "no value found";
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  //////////////////////////////// challenge 7
  kth(k) {
    let size = 0;
    let current = this.head;
    while (current) {
      size++;
      current = current.next;
    }
    let newSize = size - k;

    current = this.head;
    let count = 0;
    while (current) {
      count++;
      if (newSize === count) {
        return("the value is", current.value);
      }

      current = current.next;
    }
    if (k > size || k < size) {
      return "kth not found";
    }
  }
}

module.exports = linkedList;