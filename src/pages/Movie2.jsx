import { useState } from "react";
import MovieCard3 from "../components/MovieCard3";
import Page from "../components/Page";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
const Movie2 = () => {
  const [page, setPage] = useState(6);
  return (
    <Page title="movies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {[...movies, ...shows].slice(0, page).map((item) => {
          return <MovieCard3 {...item} key={item.id + "movie-chart"} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          className="h-10 text-sm w-36 bg-light-red rounded flex justify-center items-center gap-1"
          onClick={() => {
            setPage(page + 3);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </Page>
  );
};

export default Movie2;
