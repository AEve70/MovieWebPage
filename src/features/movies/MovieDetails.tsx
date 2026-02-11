import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../../model/movie.model";
import { getMovieById } from "../../services/movies.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getMovieById(id)
      .then((movie) => setMovie(movie)) .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="p-6 text-gray-600">Loading movie details...</div>;
  }

  if (!movie) {
    return <div className="p-6 text-red-600 font-semibold">Movie not found.</div>;
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <article className="bg-white rounded-lg shadow-md border border-[#3CCFAF] p-8 flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-64 rounded-lg shadow-lg border border-[#4D8A8A]"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#4D8A8A] mb-2">
            {movie.title} <span className="text-gray-500">({movie.year})</span>
          </h2>
          <p className="text-gray-700 mb-4">{movie.description}</p>

          <ul className="space-y-2 text-gray-800">
            <li><strong className="text-[#3CCFAF]">Genre:</strong> {movie.genre}</li>
            <li><strong className="text-[#3CCFAF]">Director:</strong> {movie.director}</li>
            <li><strong className="text-[#3CCFAF]">Duration:</strong> {movie.duration} min</li>
            <li><strong className="text-[#3CCFAF]">Rating:</strong> {movie.rating}</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
