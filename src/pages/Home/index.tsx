import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosInstance";
import MovieList from "../../components/Home/MovieList";

export default function Home() {
  const [movies, setmovies] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchMovies = async (page: number) => {
    try {
      const response = await baseApi.get(
        `/3/movie/top_rated?language=en-US&page=${page}`
      );
      // console.log(response.data.results)
      setmovies((prev) => [...prev, ...response.data.results]);
    } catch (err) {
      console.log("Fetch Error in homepage Top rated movies", err);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePageUpdate = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <section>
      <HomeSlider />
      <MovieList movies={movies} />
    </section>
  );
}
