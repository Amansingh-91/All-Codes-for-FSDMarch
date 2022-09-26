import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("waterfull", () => {
  console.log("please turn off the motor");
  setTimeout(() => {
    console.log("please turn off the motor, its a gentel reminder");
  }, 3000);
});
myEmitter.on("turnedOff", () => {
  console.log("motor is turned off");
});
myEmitter.on("isStillOn", () => {
  console.log("flying chappal from mom");
});

myEmitter.emit("waterfull");
if (true) {
  myEmitter.emit("isStillOn");
} else {
  myEmitter.emit("turnedOff");
}
myEmitter.emit("waterfull");
