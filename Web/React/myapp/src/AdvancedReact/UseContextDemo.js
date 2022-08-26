import React, { useState, useContext } from "react";

const ContextRef = React.createContext();
// provider,consumer
const UseContextDemo = () => {
  const data = [
    { id: 1, name: "aman" },
    { id: 2, name: "Divya" },
    { id: 3, name: "Dharam" },
    { id: 4, name: "jack" },
  ];
  const [person, setPerson] = useState(data);
  const removePerson = (id) => {
    const newPerson = person.filter((people) => {
      return people.id !== id;
    });
    setPerson(newPerson);
  };
  return (
    <ContextRef.Provider value={{ person, removePerson: removePerson }}>
      <div>
        <h1>UseContextDemo</h1>
        <Link />
      </div>
    </ContextRef.Provider>
  );
};

const Person = () => {
  const value = useContext(ContextRef);
  console.log(value);
  return (
    <>
      {value.person.map((people) => {
        console.log(people);
        return <SinglePerson {...people} key={people.id} />;
      })}
    </>
  );
};
const SinglePerson = ({ id, name }) => {
  const value = useContext(ContextRef);
  console.log(value);
  return (
    <div>
      <h1>{name}</h1>
      <button
        className="btn"
        onClick={() => {
          value.removePerson(id);
        }}
      >
        remove
      </button>
    </div>
  );
};
const Link = () => {
  return (
    <div>
      <Person />
    </div>
  );
};
export default UseContextDemo;
