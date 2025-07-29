import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // ✅ Don't forget this!

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>

      <main>
        {actors.length === 0 ? (
          <p>Loading actors...</p>
        ) : (
          actors.map((actor) => (
            <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </div>
  );
}

export default Actors;
