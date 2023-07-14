import { useState } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import watch from "../utils/watch.json";
import { Link } from "react-router-dom";
import { IconUnMark } from "../utils/icons";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../data/moviesSlice";
const MovieCard2 = ({ timing, title, mainImage, id, list }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  return (
    <article
      className="relative w-full aspect-video"
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
        className="block w-full  h-full  object-cover object-top"
      />
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
        className={`absolute top-0 flex flex-col justify-center items-center w-full h-full bg-[rgba(0,0,0,0.7)] ${
          !isHover && "hidden"
        }`}
      >
        <Link
          to={timing === "Tv Series" ? `/series/${id}` : `/movies/${id}`}
          className={`w-44 transition-all    h-44 rounded-full flex justify-center items-center `}
        >
          <Lottie animationData={watch} />
        </Link>
        <button
          className="absolute top-5 right-5"
          onClick={() => {
            dispatch(removeFromWatchList({ id, list }));
          }}
        >
          <IconUnMark />
        </button>
      </div>
    </article>
  );
};

MovieCard2.propTypes = {
  mainImage: PropTypes.string,
  timing: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  likes: PropTypes.number,
  list: PropTypes.number,
};

export default MovieCard2;
