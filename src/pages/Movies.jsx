import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import VideoJS from "../components/Videojs";
import { useParams } from "react-router-dom";
import MovieChart2 from "../components/MovieChart2";
import MovieInfo from "../components/MovieInfo";
import MovieSource from "../components/MovieSource";
import MovieCast from "../components/MovieCast";
import { IconLock } from "../utils/icons";
import { useSelector } from "react-redux";
import LoadingPage from "../components/LoadingPage";
import Error2 from "./Error2";
const Movies = () => {
  const { id } = useParams();
  const { movies, shows } = useSelector((store) => store.movieData);
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);
  useEffect(() => {
    const exist = movies.find((item) => item.id === id);
    setMovie(exist);
  }, [id, movies, shows]);

  if (loading) {
    return <LoadingPage />;
  }

  if (movie === "") {
    return <LoadingPage />;
  }

  if (movie === undefined) {
    return <Error2 />;
  }
  return (
    <>
      <Wrapper>
        <div className="relative mt-10 ">
          <>
            {movie.premium ? (
              <div className="aspect-video mt-20 gap-10 w-full h-auto flex flex-col justify-center items-center">
                <p className="text-7xl">
                  <IconLock className="sm:h-44 w-24 sm:w-44 h-24" />
                </p>
                <p className="sm:text-2xl text-center">
                  This Content is for Premium users only. please subscribe to
                  unlock this feature.
                </p>
              </div>
            ) : (
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
            )}
          </>
        </div>

        <MovieInfo movie={movie} />
        <MovieSource movie={movie} />
        <MovieCast movie={movie} />
      </Wrapper>
      <MovieChart2
        title="Related Movies & Shows"
        list={[...movies, ...shows].slice(0, 10)}
      />
      <MovieChart2
        title="Recommended For You"
        list={[...shows, ...movies].reverse().slice(0, 10)}
      />
    </>
  );
};

export default Movies;
