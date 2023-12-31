import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { cast } from "../services/cast";
import { Link } from "react-router-dom";
import { memo, useRef } from "react";
import { useMediaQuery } from "@mui/material";
const MovieCast = memo(({ movie }) => {
  const swiperRef = useRef(null);
  const xl = useMediaQuery("(min-width: 1400px)");
  const lg = useMediaQuery("(min-width: 1227px)");
  const md = useMediaQuery("(min-width: 968px)");
  const lm = useMediaQuery("(min-width: 768px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const xs = useMediaQuery("(min-width: 500px)");
  return (
    <div className="mt-10 relative">
      <header className="mb-5 ">
        <h2 className="text-2xl">Casts & Crews</h2>
      </header>
      <div className="flex justify-center  overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={
            xl ? 6 : lg ? 5 : md ? 4 : lm ? 3 : sm ? 2 : xs ? 1 : 1
          }
          spaceBetween={"25"}
          ref={swiperRef}
          className="relative z-10  mySwiper w-full  mb-10 mx-auto overflow-visible"
        >
          {movie.casts.map((item, index) => {
            const crew = cast.find((cs) => cs.id === item.id);
            return (
              <SwiperSlide
                className="relative bg-dark-gray  w-full h-[30rem] flex justify-center items-center"
                key={"cast-movie-item" + index + item.id}
              >
                <Link to={`/cast/${item.id}`} className="flex w-full flex-col">
                  <img
                    src={`/assets/casts/${item.id}.webp`}
                    alt=""
                    className="block w-full h-[25rem] object-cover object-top"
                  />
                  <div className="flex flex-col gap-1 justify-center items-center p-4">
                    <p className="text-base">{crew.name}</p>
                    <p className="text-sm text-gray">{crew.knownAs}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="absolute top-0 bottom-0 text-light-red md:hidden -left-11 sm:-left-16 my-auto z-20 "
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <ArrowLeft className="h-20 w-20" />
        </button>
        <button
          className="absolute top-0 bottom-0  text-light-red md:hidden  -right-11 sm:-right-16 my-auto z-20 "
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
        >
          <ArrowRight className="h-20 w-20" />
        </button>
      </div>
    </div>
  );
});
MovieCast.propTypes = {
  movie: PropTypes.object,
};
MovieCast.displayName = "MovieCast";
export default MovieCast;
