import { useState } from "react";
import {
  IconFacebook,
  IconHeart,
  IconLink,
  IconPlay,
  IconShare,
  IconTwitter,
} from "../utils/icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ mainImage, timing, title, likes }) => {
  const [isHover, setIsHover] = useState(false);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [isHoverShare, setIsHoverShare] = useState(false);
  return (
    <article
      className={`relative transition-all bg-dark-gray origin-center duration-300 h-[26rem] w-full ${
        isHover ? " p-4 pb-20 " : undefined
      }`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        src={`/assets/collections/${mainImage}`}
        alt=""
        className="block w-full mx-auto h-full object-cover"
      />
      <div
        className={`h-20 absolute   p-5 px-7 transition-all duration-300   flex justify-between items-center left-0 bottom-20 w-full ${
          isHover ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex gap-3 items-center text-gray">
          <div
            className="relative"
            onMouseEnter={() => setIsHoverShare(true)}
            onMouseLeave={() => setIsHoverShare(false)}
          >
            <button className="bg-dark-gray w-8 h-8 p-1 flex justify-center items-center rounded-full">
              <IconShare className="w-4 h-4" />
            </button>
            <div
              className={`absolute w-8 transition-all duration-150  flex-col gap-3 rounded text-sm font-bold flex justify-center items-center h-28 bg-darker-gray -top-[7.2rem] ${
                isHoverShare ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <button>
                <IconFacebook />
              </button>
              <button>
                <IconTwitter />
              </button>
              <button>
                <IconLink />
              </button>
            </div>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsHoverHeart(true)}
            onMouseLeave={() => setIsHoverHeart(false)}
          >
            <button className="bg-dark-gray w-8 h-8 p-1 flex justify-center items-center rounded-full">
              <IconHeart className="w-4 h-4 " />
            </button>
            <div
              className={`absolute min-w-[2.5rem] whitespace-nowrap transition-all duration-150  text-sm font-bold flex justify-center items-center h-7 bg-darker-gray -top-8 rounded -left-1 ${
                isHoverHeart ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {likes < 1000 ? likes : (likes / 1000).toFixed(1) + "K"}
            </div>
          </div>
        </div>
        <Link className="w-11 h-11 flex justify-center items-center transition-all duration-300 hover:text-white hover:bg-red-800 rounded-full bg-light-red">
          <IconPlay />
        </Link>
      </div>
      <div
        className={`absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black to-[rgba(0,0,0,0)] ${
          isHover && "hidden"
        }`}
      ></div>
      <div
        className={`absolute w-full h-16 p-3 px-5 bottom-0 text-white ${
          isHover && "hidden"
        }`}
      >
        <p>{title}</p>
        <p className="text-xs mt-1">{timing}</p>
      </div>
      <div
        className={` left-0 h-20 p-5   w-full transition-all duration-300  absolute bottom-0 flex justify-between ${
          isHover ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <p className="text-lg -mt-1 truncate">{title}</p>
          <p className="text-xs text-gray">{timing}</p>
        </div>
        <p className="text-sm truncate">+ watchlist</p>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  mainImage: PropTypes.string,
  timing: PropTypes.string,
  title: PropTypes.string,
  likes: PropTypes.number,
};

export default MovieCard;
