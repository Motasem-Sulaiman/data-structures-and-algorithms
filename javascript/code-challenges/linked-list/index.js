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
        return "the value is", current.value;
      }

      current = current.next;
    }
    if (k > size || k < size) {
      return "kth not found";
    }
  }
}

///////////////////////////////////////challenge 8

class newLinkedList {
  constructor(link1, link2) {
    this.link1 = link1;
    this.link2 = link2;
  }
  linkedListZip() {
    let current1 = this.link1.head;
    let current2 = this.link2.head;
    let link3 = new linkedList();

    while (current1 || current2) {
      if (current1) {
        link3.addLast(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        link3.addLast(current2.value);
        current2 = current2.next;
      }
    }

    return link3;
  }
}

module.exports = {linkedList,newLinkedList};
