import { useEffect, useState } from "react";

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
  };

  const fetchData = async (participants) => {
    fetch(
      `http://www.boredapi.com/api/activity?participants=${participants}   `,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        data.done = false;
        if (data.error) {
          alert(data.error);
          return;
        }
        setData((prev) => [...prev, data]);
      });
  };

  return { data, setData, fetchData };
};
