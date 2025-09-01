import { useEffect, useState } from "react"
import { movieService } from "../Service/MovieService"

export const useMovies = (type) => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchApi = async() => {
            try {
                setLoading(true);
                const res = await movieService.getMovies(type);
                setMovie(res.results);
                setLoading(false);
            } catch {
                setError(true);
           }
        }
        fetchApi();
    }, [type])
    return { movie, loading,error };
}