import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieLists from "./components/MovieLists";
import {  useEffect, useRef, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearchMovie } from "./hooks/useSearchMovies";
function App() {
  const { movie:movies,loading:popularLoading,error:errPopular } = useMovies("popular"); 
  const { movie: topRated, loading: topRatedLoading, error: errTopRated } = useMovies("top_rated");
  const [isSearch, setIsSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const searchRef = useRef();
      const {
        movie,
        loading,
        error
      } = useSearchMovie(inputSearch);
  useEffect(() => {
    if (loading) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  },[loading])
  return (
    <>
      <Navbar
        setIsSearch={setIsSearch}
        onSearch={setInputSearch}
        loading={loading}
      />
      <Banner />
      {isSearch ? (
        <div ref={searchRef}>
          {error && <p>Lỗi, vui lòng thử lại sau...</p>}
          <MovieLists
            title={"Kết quả tìm kiếm"}
            data={movie}
            onBack={setIsSearch}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <div>
            {errPopular && <p>Lỗi, vui lòng thử lại sau...</p>}
            <MovieLists
              title={"Phim Hot"}
              data={movies}
              loading={popularLoading}
            />
          </div>

          <div>
            {errTopRated && <p>Lỗi, vui lòng thử lại sau...</p>}
            <MovieLists
              title={"Phim đề cử"}
              data={topRated}
              loading={topRatedLoading}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
