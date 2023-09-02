const { Node, BinaryTree, traverseTwoTrees } = require("./index");

describe("traverseTwoTrees", () => {
  it("should find common elements in two binary trees", () => {
    const tree1 = new BinaryTree(
      new Node(1, new Node(2), new Node(3, new Node(4), new Node(5)))
    );

    const tree2 = new BinaryTree(
      new Node(3, new Node(4), new Node(6, new Node(7), new Node(8)))
    );

    const commonElements = traverseTwoTrees(tree1, tree2);

    const expectedCommonElements = [3, 4];

    expect(commonElements).toEqual(expectedCommonElements);
  });
});
