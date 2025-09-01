import * as request from "../Utils/request";

export const movieService = {
    getMovies: async (type) => {
        const res = await request.get(`/movie/${type}?language=en-US&page=1`);
        return res;
    },
    getPopularMovie: async() => {
       
            const res = await request.get("/movie/popular?language=en-US&page=1");
            return res;
     
    },
    getTopRateMovie: async () => {
        
            const res = await request.get("/movie/top_rated?language=en-US&page=1");
            return res;
      
    },
    searchMovie: async (text) => {
      
            const res = await request.get(`/search/movie?query=${text}`);
            return res;
      
    },
    getVideo: async (id) => {
        
            const res = await request.get(`movie/${id}/videos?language=en-US`);
            return res;
      
    }
}