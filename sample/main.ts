class Greeter {
  constructor(public greeting: string) {}
  greet() {
    return "Hello " + this.greeting + "!";
  }
}

var greeter = new Greeter("world");

console.log(greeter.greet());
