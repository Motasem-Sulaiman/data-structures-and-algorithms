function validateBrackets(string) {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(string[i]);
    } else if (string[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      if (stack.pop() !== "(") {
        return false;
      }
    } else if (string[i] === "[") {
      stack.push(string[i]);
    } else if (string[i] === "]") {
      if (stack.length === 0) {
        return false;
      }
      if (stack.pop() !== "[") {
        return false;
      }
    } else if (string[i] === "{") {
      stack.push(string[i]);
    } else if (string[i] === "}") {
      if (stack.length === 0) {
        return false;
      }
      if (stack.pop() !== "{") {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = { validateBrackets };
