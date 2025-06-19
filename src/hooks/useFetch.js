import { useEffect, useState } from "react";

const useFetch = (apiPath , queryTerm) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        setData(json.results || []);  // <<=== this line fixes your map issue
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    }
    fetchMovies();
  }, [url]);

  return { data, error };
};

export default useFetch;
