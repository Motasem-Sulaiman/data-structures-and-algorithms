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
});
