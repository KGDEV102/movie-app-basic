import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieLists from "./components/MovieLists";
import {  useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearchMovie } from "./hooks/useSearchMovies";
function App() {
  const { movie:movies,loading:popularLoading,error:errPopular } = useMovies("popular"); 
  const { movie: topRated, loading: topRatedLoading, error: errTopRated } = useMovies("top_rated");
  const [isSearch, setIsSearch] = useState(false);
  const [ inputSearch, setInputSearch ] = useState("");
      const {
        movie,
        loading,
        error
      } = useSearchMovie(inputSearch);
  
  return (
    <>
      <Navbar setIsSearch={setIsSearch} onSearch={setInputSearch} />
      <Banner loading={loading} />
      {isSearch ? (
        <div>
          {loading && (<p className="text-white">Đang tải...</p>) }
          {error &&  (<p>Lỗi, vui lòng thử lại sau...</p>)}
          <MovieLists title={"Kết quả tìm kiếm"} data={movie} onBack={setIsSearch}/>
        </div>
      ) : (
        <>
        <div>
              {popularLoading && (<p className="text-white">Đang tải...</p>)}
              {errPopular && (<p>Lỗi, vui lòng thử lại sau...</p>)}
              <MovieLists title={"Phim Hot"} data={movies} />
        </div>
           
        <div>
              {topRatedLoading && (<p className="text-white">Đang tải...</p>)}
              {errTopRated && (<p>Lỗi, vui lòng thử lại sau...</p>)}
          <MovieLists title={"Phim đề cử"} data={topRated} />
        </div>
        </>
      )}
    </>
  );
}

export default App;
