import { Link } from "react-router";
import type { Movie } from "../../model/movie.model";

export default function MoviesCard(props: Movie) {
  return (
    <Link to={"/movies/" + props.id}>
      <article className="bg-white rounded-lg shadow-md border border-[#3CCFAF] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-64">
        {/* Poster */}
        <div className="h-96 overflow-hidden">
          <img
            src={props.posterUrl}
            alt={props.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center text-[#4D8A8A] font-semibold mb-2">
            <span className="text-yellow-500 mr-1">&#9733;</span>
            {props.rating}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#4D8A8A] mb-1 truncate">
            {props.title}
          </h3>

          {/* Year */}
          <p className="text-sm text-gray-600">{props.year}</p>
        </div>
      </article>
    </Link>
  );
}
