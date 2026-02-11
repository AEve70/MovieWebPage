import { useEffect, useState} from "react";
import type { Movie } from "../../model/movie.model";
import { getMovies } from "../../services/movies.service";
import React from "react";
import MoviesList from "./MoviesList";



export default function Movies(){
    const [movies, setMovies] = React.useState<Movie[]>([]);
    const[loading, setLoading] = useState(true);

    useEffect(() =>{
        getMovies()
        .then(setMovies)
        .finally(() => setLoading(false));
        
    },[]);

    if(loading)
        return (
            <div>Loading movies...</div>
        )

    return(
        <div>
            <MoviesList movies={movies} />
        </div>
    );
    
}

