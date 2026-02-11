import type { Movie } from "../../model/movie.model";
import MoviesCard from "./MoviesCard";

export default function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-bold text-[#4D8A8A] mb-6">All Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
