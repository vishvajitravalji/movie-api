import React, { useEffect, useState } from "react";
import MovieTable from "./components/MovieTable";

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
  
      const response = await fetch(
        "https://skyit-coding-challenge.herokuapp.com/movies"
      );
      const data = await response.json();

      for (let i = 0; i < data.length; i++) {
        data[i].rating = (data[i].rating * 20).toFixed(2) + '%';        
      }

      setMovieData(data);
    };
    fetchMovieData();
  }, []);

  return (
      <MovieTable movieData={movieData} />
  );
}

export default App;
