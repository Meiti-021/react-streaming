import MovieCard3 from "../components/MovieCard3";
import Page from "../components/Page";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
const Movie3 = () => {
  return (
    <Page title="movies > Infinite-scroll">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {[...movies, ...shows].map((item) => {
          return <MovieCard3 {...item} key={item.id + "movie-chart"} />;
        })}
      </div>
    </Page>
  );
};

export default Movie3;
