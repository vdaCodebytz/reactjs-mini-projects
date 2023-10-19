import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await client.getEntries();
    setData(response.items);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, data };
};

export default useFetchData;
