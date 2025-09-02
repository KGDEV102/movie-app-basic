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
                
            } catch {
                setError(true);
            } finally {
                setLoading(false);
           }
        }
        fetchApi();
    }, [type])
    return { movie, loading,error };
}