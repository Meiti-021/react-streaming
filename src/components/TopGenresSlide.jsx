import { useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

const TopGenresSlide = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to={`/movies/search/${item}`}
      className="w-full   h-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        src={`/assets/others/${item}.webp`}
        alt=""
        className={`block transition-all duration-300 absolute  object-cover ${
          isHover[item] ? "w-[130%] h-[130%]" : "w-full h-full"
        }`}
      />
      <div className="w-full relative z-10 bg-[rgba(0,0,0,0.6)] h-full flex justify-center items-center">
        <p className="text-xl ">{item}</p>
      </div>
    </Link>
  );
};

TopGenresSlide.propTypes = {
  item: PropTypes.string,
};

export default TopGenresSlide;
