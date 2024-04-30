class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(ele) {
    this.queue.push(ele);
  }
  dequeue(ele) {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue.shift();
  }
  isEmpty() {
    return this.size() === 0;
  }
  front() {
    if (this.isEmpty()) {
      return "No elements";
    }
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  printQueue() {
    let queueString = " ";
    for (let i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ",";
    }
    console.log("Queue" + queueString);
  }
}
const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(8);
myQueue.enqueue(43);
myQueue.enqueue(98);

myQueue.dequeue();

console.log(myQueue.printQueue());
console.log(myQueue.front());
console.log(myQueue.size());

// Circular Queue Implementation
// Circular queue is a linear data structure in which operations are performed on first in first out rule and last position is connected back to first to make a circle
console.log("Question 1 Circular Queue");
var MyCircularQueue = function (k) {
  // k= size
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enqueue = function (value) {
  if (this.size === this.queue.length) return false;
  this.queue.push(value);
  return true;
};

MyCircularQueue.prototype.dequeue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

var obj = new MyCircularQueue(3);
obj.enqueue(2);
obj.enqueue(4);
obj.enqueue(6);
obj.dequeue();
obj.enqueue(8);
obj.dequeue();
obj.enqueue(10);

console.log(obj.Front(), obj.Rear());

console.log("Q2 Implement Stack using Queue");
// Q2 Implement Stack using Queue.
// Implement LIFO STACK using only 2 queue.
// Implemented stack should support all functions of stack (push, pop, top and empty)

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(x);
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};
var stack = new MyStack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);
stack.pop();
console.log(stack.pop());

console.log("Q3 Implement Queue using Stack");
// Q2 Implement Queue using Stack.
// Implement FIFO QUEUE using 2 stack.
// Implemented Queue should have all functions of queue (enqueue, front, dequeue and empty).

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.enqueue = function (x) {
  return this.stack1.push(x);
};

MyQueue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

MyQueue.prototype.front = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};
const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.dequeue();
console.log(queue.front());
