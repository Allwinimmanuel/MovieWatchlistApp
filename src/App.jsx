import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(["Inception", "Interstellar"]);
  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    if (newMovie.trim() !== "") {
      setMovies([...movies, newMovie]);
      setNewMovie("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial", background: "#ffffff" }}>
      <h1>🎬 Movie Watchlist</h1>
      <input
        type="text"
        value={newMovie}
        placeholder="Enter movie name"
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={addMovie} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie, index) => (
          <li
            key={index}
            style={{
              background: "#f0f0f0",
              margin: "8px auto",
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
            }}
          >
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
