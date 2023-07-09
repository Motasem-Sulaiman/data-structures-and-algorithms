const Stack = require("./stack");
const Queue = require("./queue");

describe("Stack", () => {
  test("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  test("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
  test('Calling pop on empty stack raises an exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });
  describe("Queue", () => {
    test("Can successfully enqueue into a queue", () => {
      const queue = new Queue();
      queue.enqueue(5);
      expect(queue.peek()).toBe(5);
    });

    test("Can successfully enqueue multiple values into a queue", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
    });

    test("Can successfully dequeue out of a queue the expected value", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      const dequeuedValue = queue.dequeue();
      expect(dequeuedValue).toBe(1);
      expect(queue.peek()).toBe(2);
    });

    test("Can successfully peek into a queue, seeing the expected value", () => {
      const queue = new Queue();
      queue.enqueue(10);
      queue.enqueue(20);
      expect(queue.peek()).toBe(10);
    });

    test("Can successfully empty a queue after multiple dequeues", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).toBe(true);
    });

    test("Can successfully instantiate an empty queue", () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });
    test("Calling dequeue on empty queue raises an exception", () => {
      const queue = new Queue();
      expect(() => queue.dequeue()).toThrowError();
    });
  });
});
