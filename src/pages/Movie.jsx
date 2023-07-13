import { useState } from "react";
import MovieCard3 from "../components/MovieCard3";
import Page from "../components/Page";
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
const Movie = () => {
  const { movies, shows } = useSelector((store) => store.movieData);

  const [page, setPage] = useState(0);
  return (
    <Page title="movies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {[...movies, ...shows].slice(page * 6, page * 6 + 6).map((item) => {
          return <MovieCard3 {...item} key={item.id + "movie-chart"} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination
          count={[...movies, ...shows].length / 6}
          page={page + 1}
          shape="rounded"
          color="error"
          onChange={(e, value) => {
            setPage(value - 1);
          }}
          sx={{
            ul: {
              "& .MuiPaginationItem-root": {
                color: "#fff",
              },
            },
          }}
        />
      </div>
    </Page>
  );
};

export default Movie;
