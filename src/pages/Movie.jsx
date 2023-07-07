import MovieCard3 from "../components/MovieCard3";
import Page from "../components/Page";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
const Movie = () => {
  return (
    <Page title="movies">
      <div className="grid grid-cols-3 gap-10">
        {[...movies, ...shows].map((item, index) => {
          return <MovieCard3 {...item} key={item.id + "movie-chart"} />;
        })}
      </div>
    </Page>
  );
};

export default Movie;
