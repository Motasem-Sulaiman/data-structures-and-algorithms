"use strict";
const { linkedList, newLinkedList } = require("./index");
describe("Linked List", () => {
  test("create a linkedlist ", async () => {
    let list = await new linkedList();
    expect(list.head).toBeNull();
  });
  test("append to linkedlist", async () => {
    let list = await new linkedList();
    list.addLast(5);
    expect(list.head.value).toEqual(5);

    list.insertBefore(5, 7);
    expect(list.head.value).toEqual(7);
  });
  test("should return the kth value from the linked list", async() => {
    let list = await new linkedList();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);
    list.addLast(5);

    const result = list.kth(2);

    expect(result).toEqual(3);
  });
  test("zip two linked lists", () => {
    let ll1 = new linkedList();
    let ll2 = new linkedList();
    ll1.addLast(1);
    ll1.addLast(3);
    ll2.addLast(2);
    ll2.addLast(4);
    const newList = new newLinkedList(ll1, ll2);
    const ll3 = newList.linkedListZip();

    let values = [];
    let current = ll3.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    expect(values).toEqual([1, 2, 3, 4]);
  });
});
