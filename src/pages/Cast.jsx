import Wrapper from "../components/Wrapper";
import { useParams } from "react-router-dom";
import { cast } from "../services/cast";
import { useState } from "react";
import { useEffect } from "react";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
import MovieCard3 from "../components/MovieCard3";
import { IconFacebook, IconInstagram, IconLinkedin } from "../utils/icons";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Cast = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState([]);
  const [value, setValue] = useState(0);
  const sm = useMediaQuery("(min-width: 640px)");
  useEffect(() => {
    const crew = cast.find((item) => item.id === id);
    const arrayMovie = [];
    const arrayShow = [];
    movies.forEach((item) => {
      if (item.casts.find((elem) => elem.id === id)) {
        arrayMovie.push(item);
      }
    });
    shows.forEach((item) => {
      if (item.casts.find((elem) => elem.id === id)) {
        arrayShow.push(item);
      }
    });
    setArtist(crew);
    setMovie(arrayMovie);
    setShow(arrayShow);
  }, [id]);
  if (artist === null) {
    return <>hi</>;
  }
  return (
    <Wrapper>
      <div className="flex flex-col mdp:flex-row mdp:gap-5 gap-10 mt-16">
        <img
          src={`/assets/casts/${id}.webp`}
          alt=""
          className="mdp:w-96 h-auto block object-cover"
        />
        <div className="">
          <h1 className="text-5xl font-bold uppercase text-transparent bg-clip-text bg-[url(/assets/others/bg.webp)]">
            {artist.name}
          </h1>
          <p className="text-gray mt-10">{artist.bio}</p>
          <div className="flex mt-10  mdp:mt-20 flex-col lg:flex-row gap-5 mdp:gap-0 ">
            {[...movie, ...show].slice(0, 2).map((item) => {
              return <MovieCard3 {...item} key={item.id + "movie-chart"} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-16 mt-10">
        <div className="w-96 flex flex-col gap-5">
          <p className="text-5xl">Personal Info</p>
          <div className="flex items-center gap-7 text-light-red mt-5">
            <a href="/">
              <IconFacebook className={"w-10 h-10"} />
            </a>
            <a href="/">
              <IconInstagram className={"w-10 h-10"} />
            </a>

            <a href="/">
              <IconLinkedin className={"w-10 h-10"} />
            </a>
          </div>
          <p className="text-lg font-bold mt-5">
            Know As:{" "}
            <span className="text-gray ml-2 font-normal">{artist.knownAs}</span>
          </p>
          <p className="text-lg font-bold ">
            Credits:{" "}
            <span className="text-gray ml-2 font-normal">
              {[...movie, ...show].length}
            </span>
          </p>
          <p className="text-lg font-bold ">
            Born In:{" "}
            <span className="text-gray ml-2 font-normal">
              {artist.nationality}
            </span>
          </p>
          <p className="text-lg font-bold ">
            Birth Date:{" "}
            <span className="text-gray ml-2 font-normal">1991, April, 10</span>
          </p>
        </div>
        <div className="w-full">
          <Tabs
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            textColor="white"
            TabIndicatorProps={{
              style: { backgroundColor: "#E50914" },
            }}
          >
            <Tab
              label="All"
              sx={{
                color: value == 0 ? "#E50914" : "white",
                fontFamily: "Roboto",
                fontSize: !sm && "0.8rem",
              }}
            />
            <Tab
              label="Movies"
              sx={{
                color: value == 1 ? "#E50914" : "white",
                fontFamily: "Roboto",
                fontSize: !sm && "0.8rem",
              }}
            />
            <Tab
              label="Shows"
              sx={{
                color: value == 2 ? "#E50914" : "white",
                fontFamily: "Roboto",
                fontSize: !sm && "0.8rem",
              }}
            />
          </Tabs>
          <div className="flex flex-col gap-5 mt-10 w-full">
            {(value === 0
              ? [...show, ...movie]
              : value === 1
              ? [...movie]
              : [...show]
            ).map((item, index) => {
              return (
                <div
                  className="h-24 flex gap-5 w-full "
                  key={item.id + "cast-charts" + index}
                >
                  <img
                    src={`/assets/collections/${item.mainImage}`}
                    alt=""
                    className="w-44 h-auto block object-cover"
                  />
                  <div className="flex items-center gap-2 capitalize w-full">
                    <p>{item.title}</p>
                    <p>as</p>
                    <p className="text-light-red">
                      {item.casts.find((elem) => elem.id === id).role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cast;
