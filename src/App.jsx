import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieLists from "./components/MovieLists";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  useEffect(() => {
    const fetchApi = async() => {
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const [res1, res2] = await Promise.all([
        fetch(url1, options), fetch(url2, options)
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      console.log(data1.results);
      console.log(data2.results);
      setMovies(data1.results);
      setMoviesTopRated(data2.results);
    }
    fetchApi();
  },[])
  return (
    <>
      <Navbar />
      <Banner />
      <MovieLists title={"Phim Hot"} data={movies}/>
      <MovieLists title={"Phim đề cử"} data={moviesTopRated}/>
    </>
  )
}

export default App;
