import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </>
  );
}

export default Movie;