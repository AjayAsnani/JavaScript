console.log("Stack");
class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty, Cannot perform pop.";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty, Cannot perform peek.";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
  printStack() {
    // Homework => Create a function that will return all the elements of the stack.
  }
}
const stack = new Stack();
stack.push(10);
stack.push(91);
stack.push(34);
stack.push(67);

console.log("Popped element", stack.pop());
console.log("Popped element", stack.pop());
console.log("Current element", stack.peek());
console.log(stack.isEmpty());
console.log("size is", stack.size());

// DSA Interview Questions.

// 1. Given an input string, reverse the order of words.
// example string = Hello world => output = world hello
const reverseWords = function (s) {
  const splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }
  let finals = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finals += " " + current;
    }
  }
  return finals.trim();
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("What is your name"));

// 2. Given a string s containing just the characters (,) {,} [ and ] determine if the input string is valid.
// Open brackets must be closed by same type of brackets and in correct order.
// every close bracket has corresponding open bracket of same type.
// input () -> true
// input () {} [] -> true
// input {] -> False

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}
const string1 = "({}[])";
const string2 = "({}[)";
console.log(isValid(string1));
console.log(isValid(string2));
