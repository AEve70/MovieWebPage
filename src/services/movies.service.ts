import type { Movie } from '../model/movie.model';

const MOVIES_URL = '../data/movies.json';

export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(MOVIES_URL);

    if(!response.ok){
        throw new Error(`Failed to fetch movies.json (status ${response.status})`);
    }

    const data = await response.json();
    console.log('Fetched movies data:', data); // Debug log
    return data as Movie[];
}

export async function getMovieById(id: string):Promise<Movie | null>{
    const movies = await getMovies(); 
    return movies.find((movie) => movie.id.toString() === id) ?? null;
}