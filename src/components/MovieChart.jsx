import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { movies } from "../services/movies";
import { Navigation } from "swiper";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useMediaQuery } from "@mui/material";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
const MovieChart = ({ title = "need a title", list = movies }) => {
  const swiperRef = useRef(null);
  const xl = useMediaQuery("(min-width: 1400px)");
  const lg = useMediaQuery("(min-width: 1227px)");
  const md = useMediaQuery("(min-width: 968px)");
  const sm = useMediaQuery("(min-width: 840px)");
  return (
    <Wrapper>
      <header className="mb-5 ">
        <h2 className="text-2xl">{title}</h2>
      </header>
      <div className="flex justify-center  overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={xl ? 5 : lg ? 4 : md ? 3 : sm ? 2 : 1}
          spaceBetween={"45"}
          ref={swiperRef}
          className="relative z-10  mySwiper w-full  mb-10 mx-auto overflow-visible"
        >
          {list.map((item, index) => {
            return (
              <SwiperSlide
                className="relative  w-full h-[26rem] flex justify-center items-center"
                key={"hero-swiper-sm" + index + item.id}
              >
                <MovieCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="absolute top-0 bottom-0 text-light-red -left-16 my-auto z-20 "
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <ArrowLeft className="h-20 w-20" />
        </button>
        <button
          className="absolute top-0 bottom-0  text-light-red  -right-16 my-auto z-20 "
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

MovieChart.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default MovieChart;
