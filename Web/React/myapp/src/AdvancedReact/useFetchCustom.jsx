import { useState, useEffect } from "react";

const useFetchCustom = (url) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { isLoading, data };
};

export default useFetchCustom;
