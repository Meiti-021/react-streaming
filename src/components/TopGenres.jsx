import Wrapper from "./Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useMediaQuery } from "@mui/material";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const genres = ["action", "comedy", "drama", "animation", "crime"];

const TopGenres = () => {
  const swiperRef = useRef(null);
  const xl = useMediaQuery("(min-width: 1400px)");
  const lg = useMediaQuery("(min-width: 1227px)");
  const md = useMediaQuery("(min-width: 968px)");
  const sm = useMediaQuery("(min-width: 840px)");
  const [isHover, setIsHover] = useState({
    action: false,
    comedy: false,
    drama: false,
    animation: false,
    crime: false,
  });
  return (
    <Wrapper>
      <header className="mb-5 ">
        <h2 className="text-2xl">Top Genres</h2>
      </header>
      <div className="flex justify-center  overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={xl ? 5 : lg ? 4 : md ? 3 : sm ? 2 : 1}
          spaceBetween={"45"}
          ref={swiperRef}
          className="relative z-10  mySwiper w-full  mb-10 mx-auto overflow-visible"
        >
          {genres.map((item, index) => {
            return (
              <SwiperSlide
                className="relative overflow-hidden w-full h-52 flex justify-center items-center"
                key={"hero-swiper-sm" + index + item.id}
                onMouseEnter={() => setIsHover({ ...isHover, [item]: true })}
                onMouseLeave={() => {
                  setIsHover({ ...isHover, [item]: false });
                }}
              >
                <Link to="/" className="w-full   h-full">
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

export default TopGenres;
