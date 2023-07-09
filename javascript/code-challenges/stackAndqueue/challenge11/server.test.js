const pseudoQueue = require("./index");

describe("pseudoQueue", () => {
  it("Can successfully enqueue onto a pseudoQueue", () => {
    const queue = new pseudoQueue();
    queue.enqueue(5);
    expect(queue.stackOne.peek()).toBe(5);
  });
});
it("Can successfully enqueue onto a pseudoQueue", () => {
  const queue = new pseudoQueue();
  queue.enqueue(100);
  queue.enqueue(10);
  queue.enqueue(15);
  expect(queue.stackOne.peek()).toBe(15);
});
it("Can successfully dequeue from the pseudoQueue", () => {
  const queue = new pseudoQueue();
  queue.enqueue(100);
  queue.enqueue(10);
  queue.enqueue(15);
  queue.enqueue(20);
  queue.dequeue();
  expect(queue.stackTwo.peek()).toBe(10);
});
