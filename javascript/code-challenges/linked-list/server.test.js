"use strict";
// Require our linked list implementation
const LinkedList = require("./index");
describe("Linked List", () => {
  test("create a linkedlist ", async () => {
    let list = await new LinkedList();
    expect(list.head).toBeNull();
  });
  test("append to linkedlist", async () => {
    let list = await new LinkedList();
    list.addLast(5);
    expect(list.head.value).toEqual(5);

    list.insertBefore(5, 7);
    expect(list.head.value).toEqual(7);
  });
  test("should return the kth value from the linked list", async() => {
    let list = await new LinkedList();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);
    list.addLast(5);

    const result = list.kth(2);

    expect(result).toEqual(3);
  });
});
