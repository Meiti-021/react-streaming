import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import MovieCard3 from "./MovieCard3";
const MovieChart2 = ({ title = "need a title", list }) => {
  const swiperRef = useRef(null);
  const xl = useMediaQuery("(min-width: 1400px)");
  const lg = useMediaQuery("(min-width: 1227px)");
  const md = useMediaQuery("(min-width: 968px)");
  const sm = useMediaQuery("(min-width: 840px)");
  return (
    <Wrapper className={"-mt-10"}>
      <header className="mb-5 ">
        <h2 className="text-2xl">{title}</h2>
      </header>
      <div className="flex justify-center  overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={xl ? 4 : lg ? 3 : md ? 2 : sm ? 1 : 1}
          spaceBetween={"20"}
          ref={swiperRef}
          className="relative z-10  mySwiper w-full  mb-10 mx-auto overflow-visible"
        >
          {list.map((item, index) => {
            return (
              <SwiperSlide
                className="relative  w-full h-56 flex justify-center items-center"
                key={"hero-swiper-sm" + index + item.id}
              >
                <MovieCard3 {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="absolute top-0 bottom-0 text-light-red -left-11 sm:-left-16 my-auto z-20 "
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <ArrowLeft className="h-20 w-20" />
        </button>
        <button
          className="absolute top-0 bottom-0  text-light-red  -right-11 sm:-right-16 my-auto z-20 "
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
        >
          <ArrowRight className="h-20 w-20" />
        </button>
      </div>
    </Wrapper>
  );
};

MovieChart2.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default MovieChart2;
2;
