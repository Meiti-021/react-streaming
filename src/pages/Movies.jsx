import { movies } from "../services/movies";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import VideoJS from "../components/Videojs";
import { useLocation, useParams } from "react-router-dom";
import { shuffle } from "../utils/utils";
import MovieChart2 from "../components/MovieChart2";
import { shows } from "../services/shows";
import MovieInfo from "../components/MovieInfo";
import MovieSource from "../components/MovieSource";
import MovieCast from "../components/MovieCast";
import Loading from "../components/Loading";
const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const path = useLocation();
  useEffect(() => {
    const exist = movies.find((item) => item.id === id);
    setMovie(exist);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [path]);

  if (loading) {
    return <Loading />;
  }

  if (movie === undefined) {
    return <h1>404</h1>;
  }
  return (
    <>
      <Wrapper>
        <div className="relative mt-10 ">
          <>
            <VideoJS
              options={{
                autoplay: false,
                controls: true,
                responsive: true,
                fluid: false,
                sources: [
                  {
                    src: movie.video,
                    type: "video/mp4",
                  },
                ],

                poster: `/assets/collections/${movie.bgImage}`,
                aspectRatio: "16:9",
              }}
            />
          </>
        </div>

        <MovieInfo movie={movie} />
        <MovieSource movie={movie} />
        <MovieCast movie={movie} />
      </Wrapper>
      <MovieChart2
        title="Related Movies & Shows"
        list={shuffle([...movies, ...shows]).slice(0, 10)}
      />
      <MovieChart2
        title="Recommended For You"
        list={shuffle([...movies, ...shows]).slice(0, 10)}
      />
    </>
  );
};

export default Movies;
