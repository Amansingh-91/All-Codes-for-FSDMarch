const express = require("express");
const { people } = require("./scripts/data");

const app = express();

app.use(express.static("./Temp_Public"));

//parser for form
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    console.log(name);
    return res.json({ success: true, data: { person: name } });
  }
  res.status(404).json({ success: false, msg: "provide name value" });
});

app.put("/api/people/:id", (req, res) => {
  const { name } = req.body;

  const myperson = people.find((person) => person.id == Number(req.params.id));
  if (myperson) {
    myperson.name = name;
    return res.status(201).json({ success: true, data: [...people] });
  }

  res.status(404).json({ success: false, msg: "person id does not exist" });
});

// delete request
app.delete("/api/people/:id", (req, res) => {
  const { name } = req.body;

  const myperson = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  if (myperson) {
    myperson.name = name;
    return res.status(201).json({ success: true, data: [...myperson] });
  }

  res.status(404).json({ success: false, msg: "person id does not exist" });
});

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(201).send(`Welcome ${name}`);
  }
  res.status(404).send("enter the name");
});
app.listen(3000, () => {
  console.log("listening on port 3000...");
});
