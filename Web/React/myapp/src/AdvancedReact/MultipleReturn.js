import React, { useEffect, useState } from "react";
let url = "https://api.github.com/users/gaearon";

const MultipleReturn = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((rspo) => {
        if (rspo.status >= 200 && rspo.status < 300) {
          return rspo.json();
        }
        throw "Somting wrong";
      })
      .then((details) => {
        console.log(details);
        setIsLoading(false);
        setData(details.login);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default MultipleReturn;
