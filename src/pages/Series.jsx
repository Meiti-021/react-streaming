import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import VideoJS from "../components/Videojs";
import { useNavigate, useParams } from "react-router-dom";
import MovieChart2 from "../components/MovieChart2";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";
import { IconLock } from "../utils/icons";
import ShowSource from "../components/ShowSource";
import { useSelector } from "react-redux";
import Error2 from "./Error2";
import LoadingPage from "../components/LoadingPage";
const Series = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, shows } = useSelector((store) => store.movieData);
  const [show, setShow] = useState("");
  const [episode, setEpisode] = useState(0);
  const [season, setSeason] = useState(0);
  useEffect(() => {
    const exist = shows.find((item) => item.id === id);
    setShow(exist);
  }, [id, movies, shows, navigate]);

  if (show === "") {
    return <LoadingPage />;
  }

  if (show === undefined) {
    return <Error2 />;
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
        <select
          name=""
          id=""
          className="w-40 h-8 bg-black -mb-10 px-2"
          onInput={(e) => {
            setSeason(+e.target.value);
          }}
        >
          {show.series.map((item, index) => {
            return (
              <option value={index} key={item.title}>
                Season {index + 1}
              </option>
            );
          })}
        </select>
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
        list={[...movies, ...shows].slice(0, 10)}
      />
      <MovieChart2
        title="Recommended For You"
        list={[...shows, ...movies].slice(0, 10)}
      />
    </>
  );
};

export default Series;
