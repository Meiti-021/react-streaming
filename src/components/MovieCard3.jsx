import PropTypes from "prop-types";
import { memo, useState } from "react";
import {
  IconFacebook,
  IconHeart,
  IconHeartFill,
  IconLink,
  IconPlay,
  IconPlus,
  IconShare,
  IconTwitter,
} from "../utils/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWatchlist, likeMovie } from "../data/moviesSlice";
const MovieCard3 = memo(({ timing, title, likes, bgImage, id, liked }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [isHoverShare, setIsHoverShare] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className={`relative w-full h-60  bg-center`}
      onMouseEnter={() => {
        setMouseIn(true);
      }}
      onMouseLeave={() => {
        setMouseIn(false);
      }}
    >
      <img
        src={`/assets/collections/${bgImage}`}
        alt=""
        className="w-full h-full absolute object-cover"
      />
      <div
        className={`p-5 w-full h-full absolute  bg-gradient-to-r from-black to-[rgba(0,0,0,0)] flex justify-between items-center transition-all duration-500 ${
          mouseIn && "via-black"
        }`}
      >
        <div className="flex flex-col gap-4">
          <p className="">{title}</p>
          <p className="">{timing}</p>
          <Link
            to={timing === "Tv Series" ? `/series/${id}` : `/movies/${id}`}
            className="h-10 text-sm w-36 bg-light-red rounded flex justify-center items-center gap-1"
          >
            <IconPlay /> PLAY NOW
          </Link>
        </div>
        <div
          className={`flex flex-col transition-all duration-500 justify-center items-center gap-3 ${
            mouseIn
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="relative w-14 h-14 cursor-pointer bg-gray p-2 rounded-full flex justify-center items-center"
            onMouseEnter={() => {
              setIsHoverHeart(true);
            }}
            onMouseLeave={() => {
              setIsHoverHeart(false);
            }}
          >
            <button
              className="w-full h-full rounded-full flex justify-center items-center bg-white text-light-red hover:bg-light-red hover:text-white transition-all duration-500"
              onClick={() => {
                dispatch(likeMovie(id));
              }}
            >
              {liked ? (
                <IconHeartFill className="w-4 h-4 text-light-red" />
              ) : (
                <IconHeart className="w-4 h-4 " />
              )}
            </button>
            <div
              className={`absolute p-3 flex justify-center items-center w-auto h-9 rounded -left-14 bg-black text-sm transition-all duration-500 ${
                isHoverHeart
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {likes < 1000 ? likes : `${(likes / 1000).toFixed(1)}K`}
            </div>
          </div>
          <div
            className="relative flex justify-center items-center w-14 h-14 cursor-pointer bg-gray p-2 rounded-full"
            onMouseEnter={() => {
              setIsHoverShare(true);
            }}
            onMouseLeave={() => {
              setIsHoverShare(false);
            }}
          >
            <div className="w-full h-full rounded-full flex justify-center items-center bg-white text-light-red hover:bg-light-red hover:text-white transition-all duration-500">
              <IconShare />
            </div>
            <div
              className={`absolute p-3 flex justify-center items-center gap-2 w-auto h-9 rounded -left-28 bg-black text-sm transition-all duration-500 ${
                isHoverShare
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <a href="#" className="block">
                <IconFacebook />
              </a>
              <a href="#" className="block">
                <IconTwitter />
              </a>
              <a href="#" className="block">
                <IconLink />
              </a>
            </div>
          </div>
          <div className="w-14 h-14 cursor-pointer bg-gray p-2 rounded-full">
            <div
              className="w-full h-full rounded-full flex justify-center items-center bg-white text-light-red hover:bg-light-red hover:text-white transition-all duration-500"
              onClick={() => {
                dispatch(addToWatchlist(id));
              }}
            >
              <IconPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

MovieCard3.propTypes = {
  bgImage: PropTypes.string,
  timing: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  likes: PropTypes.number,
  liked: PropTypes.bool,
};
MovieCard3.displayName = "MovieCard3";
export default MovieCard3;
