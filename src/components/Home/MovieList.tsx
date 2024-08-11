import { MovieCardType, imagepath } from "../../utils/constant";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "../Skeleton/MovieCardSkeleton";

interface MovieListProps {
  movies: MovieCardType[];
  title?: string;
  showTopRatedHeading?: boolean; // New prop
}

function MovieList({
  movies,
  title,
  showTopRatedHeading = true,
}: MovieListProps) {
  return (
    <div className="md:mt-14 sm:mt-8 mt-2 px-2">
      {showTopRatedHeading && (
        <h1 className="my-[3rem] text-white text-[32px]">Top Rated</h1>
      )}
      {title && (
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-white">
          {title}
        </h1>
      )}
      <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        {movies.length > 0
          ? movies.length > 0 &&
            movies.map((data, ind) => <MovieCard key={ind} movieData={data} />)
          : [...Array(12)].map((item, i) => <MovieCardSkeleton key={i} />)}
      </div>
    </div>
  );
}

export default MovieList;
