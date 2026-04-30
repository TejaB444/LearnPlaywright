//Exercise 4: Method Chaining with this

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    return this;
  }

  display() {
    console.log("Count:", this.count);
    return this;
  }
}
new Counter().display();
new Counter().increment().display();
new Counter().increment().increment().display();
new Counter().increment().increment().increment().display();