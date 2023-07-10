const {validateBrackets} = require("./index");

test('Valid brackets: "(){}[]"', () => {
  expect(validateBrackets("(){}[]")).toBe(true);
});

test('Valid brackets with extra characters: "()[[Extra Characters]]"', () => {
  expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
});

test('Invalid brackets: "{[}]()"', () => {
  expect(validateBrackets("{[}]()")).toBe(false);
});

test('Invalid brackets: "("', () => {
  expect(validateBrackets("(")).toBe(false);
});

test('Invalid brackets: "[(])"', () => {
  expect(validateBrackets("[(])")).toBe(false);
});

test('Valid brackets: "({[]})"', () => {
  expect(validateBrackets("({[]})")).toBe(true);
});
