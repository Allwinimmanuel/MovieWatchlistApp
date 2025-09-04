import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { name: "Inception", watched: false },
    { name: "Interstellar", watched: true },
    { name: "The Dark Knight", watched: false },
  ]);

  const [newMovie, setNewMovie] = useState("");

  // Add new movie
  const addMovie = () => {
    if (newMovie.trim() !== "") {
      setMovies([...movies, { name: newMovie, watched: false }]);
      setNewMovie("");
    }
  };

  // Toggle watched/unwatched
  const toggleWatched = (index) => {
    const updated = [...movies];
    updated[index].watched = !updated[index].watched;
    setMovies(updated);
  };

  // Delete movie
  const deleteMovie = (index) => {
    const updated = [...movies];
    updated.splice(index, 1);
    setMovies(updated);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#222" }}>🎬 Movie Watchlist</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={newMovie}
          placeholder="Enter movie name"
          onChange={(e) => setNewMovie(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addMovie}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {movies.map((movie, index) => (
          <li
            key={index}
            style={{
              background: movie.watched ? "#c8e6c9" : "#fff3cd",
              margin: "10px 0",
              padding: "15px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                textDecoration: movie.watched ? "line-through" : "none",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {movie.name}
            </span>
            <div>
              <button
                onClick={() => toggleWatched(index)}
                style={{
                  marginRight: "10px",
                  padding: "6px 12px",
                  background: movie.watched ? "#f57c00" : "#2196f3",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                {movie.watched ? "Unwatch" : "Watched"}
              </button>
              <button
                onClick={() => deleteMovie(index)}
                style={{
                  padding: "6px 12px",
                  background: "#e53935",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
