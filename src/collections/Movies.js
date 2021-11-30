import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Outlet } from "react-router";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../redux/movies/moviesActions";

const Movies = () => {
  const { genreName } = useParams();

  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((state) => state?.movies);
  useEffect(() => dispatch(fetchMovies()), []);
  if (loading) {
    return null;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div className="movie-cards">
      {movies
        ?.filter((movie) =>
          movie.genres.some((element) => element.toLowerCase() === genreName)
        )
        ?.map((moviee) => (
          <MovieCard key={moviee.id} id={moviee?.id} />
        ))}
      <Outlet />
    </div>
  );
};

export default Movies;
