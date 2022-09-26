const EventEmitter = require("events");
const customEvent = new EventEmitter();

customEvent.on("DataRecived", () => {
  console.log("Data Recived Successfully");
});
customEvent.on("DataRecived", () => {
  console.log("Data Recived Successfully. multiple callback");
});
customEvent.on("DataRecived", (name, id) => {
  console.log(
    `Data Recived Successfully. name recived is ${name} with id ${id}`
  );
});
customEvent.emit("DataRecived", "Aman", 1);
