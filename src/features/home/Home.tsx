'use client'
import { useEffect, useState } from 'react'
import type { Movie } from "../../model/movie.model";
import { getMovies } from "../../services/movies.service";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies()
      .then((data) => setMovies(data)) // data ya se infiere como Movie[]
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3CCFAF] to-[#4D8A8A] rounded-lg shadow-lg m-4">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Welcome to Movie Page
          </h1>
          <p className="mt-6 text-lg leading-8">
            “Welcome to Movie Page, your personal gateway to the world of film. Whether you’re chasing nostalgia or seeking something new, we’ve got the stories that move you.”
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <a
              href="/movies"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#4D8A8A] shadow-sm hover:bg-[#3CCFAF] hover:text-white"
            >
              Go through our movies collection
            </a>
          </div>
        </div>
      </section>

      {/* Películas destacadas */}
      <section className="bg-white rounded-lg shadow-md border border-[#3CCFAF] m-4">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl font-bold text-[#4D8A8A] mb-6">
            Most Popular Movies
          </h2>

          {loading ? (
            <p className="text-gray-600">Loading movies...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.slice(0, 3).map((movie) => (
                <div
                  key={movie.id}
                  className="rounded-lg border border-[#3CCFAF] shadow-lg shadow-[#4D8A8A]/20 bg-white p-4"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#4D8A8A]">
                    <a href={`/movies/${movie.id}`}>{movie.title}</a>
                  </h3>
                  <p className="text-sm text-gray-600">{movie.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
