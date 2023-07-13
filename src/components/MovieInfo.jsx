import { useState, useRef } from "react";
import Lottie from "lottie-react";
import play from "../utils/play.json";
import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUp,
  IconDownload,
  IconHeart,
  IconPlus,
  IconShare,
  IconTag,
  IconTick,
} from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { createWatchlist, setCurrentList } from "../data/moviesSlice";

const MovieInfo = ({ movie, season, episode }) => {
  const { watchList, currentPlayList } = useSelector(
    (store) => store.movieData
  );
  const dispatch = useDispatch();
  const playlistRef = useRef(null);
  const [newList, setNewList] = useState(watchList[currentPlayList].name);
  const [readOnly, setReadOnly] = useState(true);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col h-auto gap-10 justify-between my-7">
      <div className="flex flex-col gap-10 xs:h-72 justify-between ">
        <div className="flex items-start flex-wrap flex-col xs:flex-row xs:items-center gap-3">
          <h1 className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-[url(/assets/others/bg.webp)]">
            {movie.title}{" "}
            {season !== undefined && episode !== undefined
              ? `(S${season + 1}E${episode + 1})`
              : undefined}
          </h1>
          <div className="flex items-center gap-2 ">
            <Rating
              readOnly
              precision={0.5}
              value={(movie.imdbRate * 5) / 10}
              sx={{ color: "#E50914" }}
            />
            <div className="flex items-center text-2xl gap-3">
              <p className="text-sm">{(movie.imdbRate * 5) / 10}</p>
              <img
                src="/assets/others/imdb.webp"
                alt=""
                className="h-7 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white w-6 text-black h-5 font-bold flex justify-center items-center rounded-sm">
            G
          </div>
          <p className="text-sm xs:text-lg ">{movie.timing}</p>
          <p className="text-sm xs:text-lg uppercase">july , 2023</p>
        </div>
        <div className="flex gap-5 flex-col xs:flex-row">
          <div className="flex items-center gap-3">
            <div
              className="h-11 w-11 rounded-full p-1 bg-slate-400"
              title="share"
            >
              <button className="w-full rounded-full h-full flex justify-center items-center bg-white text-light-red">
                <IconShare />
              </button>
            </div>
            <div
              className="h-11 w-11 rounded-full p-1 bg-slate-400"
              title={`+ ${movie.likes}`}
            >
              <button className="w-full rounded-full h-full flex justify-center items-center bg-white text-light-red">
                <IconHeart />
              </button>
            </div>
            <div
              className="h-11 w-11 rounded-full p-1 bg-slate-400"
              title="add to watchlist"
            >
              <button className="w-full rounded-full h-full flex justify-center items-center bg-white text-light-red">
                <IconPlus />
              </button>
            </div>
            <div
              className="h-11 w-11 rounded-full p-1 bg-slate-400"
              title="download"
            >
              <button className="w-full rounded-full h-full flex justify-center items-center bg-white text-light-red">
                <IconDownload />
              </button>
            </div>
          </div>
          <div className="w-52 p-1 py-2 rounded-md grid grid-cols-5 bg-black h-10 relative">
            <button
              className="col-span-1 flex justify-center items-center border-r-1 border-gray"
              onClick={() => {
                setReadOnly(false);
                playlistRef.current.focus();
              }}
            >
              <IconPlus />
            </button>
            <input
              type="text"
              value={newList}
              readOnly={readOnly}
              onChange={(e) => {
                setNewList(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && !readOnly) {
                  dispatch(createWatchlist(newList));
                  setReadOnly(true);
                }
              }}
              onBlur={() => {
                if (!readOnly) {
                  dispatch(createWatchlist(newList));
                  setReadOnly(true);
                }
              }}
              ref={playlistRef}
              className="text-sm px-4 bg-black border-none focus:border-none outline-none col-span-3 flex justify-center items-center"
            />
            <button
              className="col-span-1 flex justify-center items-center"
              onClick={() => {
                setPlaylistOpen(!playlistOpen);
              }}
            >
              {playlistOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            <div
              className={
                playlistOpen
                  ? "absolute rounded-md top-full p-4 w-full h-auto max-h-40 bg-black flex flex-col justify-between items-stretch"
                  : "hidden"
              }
              id="playlist"
            >
              {watchList
                .slice(-3)
                .reverse()
                .map((item, index) => {
                  return (
                    <button
                      key={item.name + index}
                      className="flex py-2 justify-between border-b-1 border-gray"
                      onClick={() => {
                        dispatch(setCurrentList(item.name));
                      }}
                    >
                      {item.name}
                      <div className="relative overflow-hidden ">
                        <div className="relative z-10">
                          <IconTick />
                        </div>
                        <div
                          className={`w-full h-full bg-black duration-700 top-0 absolute z-20 transition-all ${
                            item.id === currentPlayList
                              ? " left-full"
                              : "left-0"
                          }`}
                        ></div>
                      </div>
                    </button>
                  );
                })}
              <Link className="flex py-2 justify-between">
                More list items ...
              </Link>
            </div>
          </div>
        </div>
        <p className="flex text-sm xs:text-lg items-center gap-5">
          <p className="text-light-red  h-full flex items-center gap-1 ">
            <IconTag />
            TAGS :
          </p>
          <p className="h-full flex items-center">{movie.genres}</p>
        </p>
      </div>
      <div className=" lg:max-w-[35rem] w-full aspect-video h-auto max-h-[18rem] relative rounded-lg">
        <img
          src={`/assets/collections/${movie.mainImage}`}
          alt=""
          className="w-full relative z-0 h-full object-cover"
        />
        <div className="absolute top-0 z-10 w-full h-full justify-center items-center flex flex-col  bg-[rgba(0,0,0,0.3)]">
          <Lottie animationData={play} className="h-48" />
          <p className="text-lg uppercase -mt-14">watch trailer</p>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  season: PropTypes.number,
  episode: PropTypes.number,
};

export default MovieInfo;
