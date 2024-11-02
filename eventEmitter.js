import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

// You can Also pass parameters to it
function greetHandler(name) {
  console.log("Good Morning " + name);
}

function byeHandler(name) {
  console.log("Good Bye " + name);
}

// Listen to the Event
myEmitter.on("greet", greetHandler);
myEmitter.on("bye", byeHandler);

// Register Event

myEmitter.emit("greet", "Shayan Shah");
myEmitter.emit("bye", "Shayan Shah");

// Error handling in Event emitter

myEmitter.on("error", (err) => console.log("An Error Occured", err));

// Simulate Error
myEmitter.emit("error", new Error("Something went Wrong"));
