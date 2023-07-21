import { useState } from "react";
import MovieCard3 from "../components/MovieCard3";
import Page from "../components/Page";
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingPage from "../components/LoadingPage";
const MovieSearch = () => {
  const { word } = useParams();
  const navigate = useNavigate();
  const { movies, shows } = useSelector((store) => store.movieData);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const array = [...movies, ...shows].filter((item) => {
      if (
        item.title.toLowerCase().includes(word.toLowerCase()) ||
        item.genres.toLowerCase().includes(word.toLowerCase())
      ) {
        return item;
      }
    });
    setSearch(array);
  }, [word, movies, shows]);
  if (search === "") {
    return <LoadingPage />;
  }
  if (!search.length) {
    return (
      <Page title={`movies?=${word.substring(0, 7)}...`}>
        <div className="h-96 flex flex-col justify-center gap-5 items-center">
          <p>SORRY,NOTHING FOUND!</p>
          <button
            className="h-10 text-sm w-36 bg-light-red rounded flex justify-center items-center gap-1 relative"
            onClick={() => {
              navigate(-1);
            }}
          >
            GO BACK
          </button>
        </div>
      </Page>
    );
  }
  return (
    <Page title={`movies?=${word.substring(0, 7)}...`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {search.slice(page * 6, page * 6 + 6).map((item) => {
          return <MovieCard3 {...item} key={item.id + "movie-chart"} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination
          count={search.length / 6}
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

export default MovieSearch;
