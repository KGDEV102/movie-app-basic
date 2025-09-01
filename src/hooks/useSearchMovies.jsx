import { useEffect, useState } from "react"
import { movieService } from "../Service/MovieService";

export const useSearchMovie = (text="") => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (!text.trim()) {
            setMovie([]);
            return;
        }
        const fetchApi = async () => {
            try {
                setLoading(true);
                setError(false);
                const res = await movieService.searchMovie(text);
                setMovie(res.results);
                
                setLoading(false);
            } catch {
                setError(true);
            }
        }
        fetchApi();
    }, [text]);
    return { movie, loading, error };
    
}