import { useEffect, useState } from "react";

const KEY = "77ed1593";
export function useMovies(query, callBack) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(
        function () {
            callBack?.();
          const controller = new AbortController();
          async function fetchMovies() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
              );
              if (!res.ok)
                throw new Error("something went wrong while fetching movie Data");
              const data = await res.json();
              if (data.Response === "False") throw new Error("movie not Found");
              setMovies(data.Search);
              setError("");
            } catch (err) {
              if (err.name !== "AbortError") {
                setError(err.message);
              }
            } finally {
              setIsLoading(false);
            }
          }
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
          fetchMovies();
          return function () {
            controller.abort();
          };
        },
        [query]
      );
      return {
        movies, isLoading, error
      }
}