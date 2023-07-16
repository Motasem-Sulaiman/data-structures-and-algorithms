"use strict";
const { BinaryTree } = require("../index");
const { Node } = require("../index");

let tree = null;

describe("Binary Tree", () => {

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BinaryTree(one);
  });
  it("constructor should create an empty tree", () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });
  it("constructor should create a tree with a single root node", () => {
    const rootNode = new Node(10);
    const newTree = new BinaryTree(rootNode);
    expect(newTree.root).toEqual(rootNode);
  });
  it("constructor", () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });
  it("Can successfully return a collection from a pre-order traversal", () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  it("Can successfully return a collection from an in-order traversal", () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });
  it("Can successfully return a collection from a post-order traversal", () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });
  
  

  it("Can successfully add a left child and right child properly to a node", () => {
    let tree2 = new BinaryTree();
    tree2.add(10);
    tree2.add(5);
    tree2.add(15);
    tree2.add(3);
    tree2.add(7);
    tree2.add(12);
    tree2.add(20);
  
    const rootNode = tree2.root;
    expect(rootNode.value).toBe(10);
    expect(rootNode.left.value).toBe(5);
    expect(rootNode.right.value).toBe(15);
    expect(rootNode.left.left.value).toBe(3);
    expect(rootNode.left.right.value).toBe(7);
    expect(rootNode.right.left.value).toBe(12);
    expect(rootNode.right.right.value).toBe(20);
  });
  it("Returns true for the contains method, given an existing node value", () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(20);

    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(12)).toBe(true);
    expect(tree.contains(20)).toBe(true);
  });
  it("Returns false for the contains method, given a non-existing node value", () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(20);

    expect(tree.contains(2)).toBe(false);
    expect(tree.contains(8)).toBe(false);
    expect(tree.contains(25)).toBe(false);
  });
  it("Return the max value in the tree", () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(20);
    tree.add(90);

    expect(tree.getMax()).toBe(90);
    
  });
});
