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
import { IconLock } from "../utils/icons";
import ShowSource from "../components/ShowSource";
const Series = () => {
  const { id } = useParams();
  const [show, setShow] = useState(undefined);
  const [episode, setEpisode] = useState(0);
  const [season, setSeason] = useState(0);
  const [loading, setLoading] = useState(false);
  const path = useLocation();
  useEffect(() => {
    const exist = shows.find((item) => item.id === id);
    setShow(exist);
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

  if (show === undefined) {
    return <h1>404</h1>;
  }
  return (
    <>
      <Wrapper>
        <div className="relative mt-10 ">
          <>
            {show.premium ? (
              <div className="aspect-video gap-10 w-full h-auto flex flex-col justify-center items-center">
                <p className="text-7xl">
                  <IconLock className="h-44 w-44" />
                </p>
                <p className="text-2xl">
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
                      src: show.series[season].episodes[episode].video,
                      type: "video/mp4",
                    },
                  ],

                  poster: `/assets/collections/${show.bgImage}`,
                  aspectRatio: "16:9",
                }}
              />
            )}
          </>
        </div>

        <MovieInfo movie={show} season={season} episode={episode} />
        <ShowSource
          movie={show}
          season={season}
          setEpisode={setEpisode}
          episode={episode}
        />
        <MovieCast movie={show} />
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

export default Series;
