import React, { useState } from "react";
let data = [
  { name: "Aman", id: 1 },
  { name: "jhon", id: 2 },
  { name: "paul", id: 3 },
  { name: "peter", id: 4 },
];
let newid = 4;
export const DisplayList = () => {
  let [names, setName] = useState(data);
  return (
    <div>
      <ul>
        {names.map((detail) => {
          console.log(detail);
          return (
            <h3 key={detail.id}>
              {detail.name}
              {"        "}
              <button
                onClick={() => {
                  let newNames = names.filter((removename) => {
                    return removename.id !== detail.id;
                  });
                  setName(newNames);
                }}
              >
                remove
              </button>
            </h3>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setName([]);
        }}
      >
        Clear All
      </button>
      <button
        onClick={() => {
          newid += 1;
          let newname = Math.random() * 100;
          setName([...names, { name: newname, id: newid }]);
        }}
      >
        Add Name
      </button>
    </div>
  );
};
