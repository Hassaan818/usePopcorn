import Movies from "./Movies";

export default function MoviesList({movies, onSelectedMovie}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movies movie={movie}
        onSelectedMovie={onSelectedMovie} />
      ))}
    </ul>
  );
}
