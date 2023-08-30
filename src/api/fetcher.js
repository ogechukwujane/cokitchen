import { useEffect, useState } from "react";

export const fetcher = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://3wdz.c.time4vps.cloud:3000" + url;

  console.log('url',baseUrl);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [baseUrl]);
  return { data, loading };
};
