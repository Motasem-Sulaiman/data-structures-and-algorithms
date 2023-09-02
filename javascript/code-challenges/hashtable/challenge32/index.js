class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let result = [];
    let traverse = (node) => {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
}

function traverseTwoTrees(tree1, tree2) {
  const result1 = tree1.preOrder();
  const result2 = tree2.preOrder();
  const newArr = [];

  for (let i = 0; i < result1.length; i++) {
    for (let j = 0; j < result2.length; j++) {
      if (result1[i] === result2[j]) {
        newArr.push(result2[j]);
      }
    }
  }
  return newArr
}
module.exports={BinaryTree,Node,traverseTwoTrees}