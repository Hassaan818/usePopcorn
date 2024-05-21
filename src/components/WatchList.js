import WatchMovieList from "./WatchMovieList";

export default function WatchList({ watched, onDeleteWatchedMovie }) {
    return (
      <ul className="list">
        {watched.map((movie) => (
          <WatchMovieList movie={movie} onDeleteWatchedMovie={onDeleteWatchedMovie}/>
        ))}
      </ul>
    );
  }