import React, { useState } from "react";

const ControlledInput = () => {
  let [name, setName] = useState("");
  //   let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [person, setPerson] = useState([]);
  let duplicate = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    let newPeople = { name, email, id: new Date().getTime().toString() };
    for (let i in person) {
      console.log(i);
      if (person[i].email === newPeople.email) {
        setEmail("");
        setName("");
        console.log("Duplicate");
        duplicate = true;
        break;
      } else {
        duplicate = false;
      }
    }
    if (!duplicate) {
      if (name && email) {
        setPerson((prevPerson) => {
          return [...prevPerson, newPeople];
          //   prevPerson.push(newPeople);
          //   console.log(prevPerson);
          //   return prevPerson;
        });
      }
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="FirstName">Name:</label>
          <input
            type="text"
            name="Firstname"
            id="Firstname"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {/* <label htmlFor="Age">Age:</label>
          <input type="text" name="Age" id="Age" value="" /> */}
        </div>
        <button className="btn">Add Person</button>
      </form>
      <div>
        {person.map((people) => {
          return (
            <div className="d-flex justify-content-between" key={people.id}>
              <span>{people.name}</span>
              <span>{people.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledInput;
