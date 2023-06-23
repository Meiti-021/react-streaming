import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useMediaQuery } from "@mui/material";
import { cast } from "../services/cast";
import { Link } from "react-router-dom";
const CastChart = () => {
  const swiperRef = useRef(null);
  const xl = useMediaQuery("(min-width: 1400px)");
  const lg = useMediaQuery("(min-width: 1227px)");
  const md = useMediaQuery("(min-width: 968px)");
  const sm = useMediaQuery("(min-width: 840px)");
  return (
    <Wrapper>
      <header className="mb-5 ">
        <h2 className="text-2xl">Top Cast</h2>
      </header>
      <div className="flex justify-center  overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={xl ? 7 : lg ? 5 : md ? 3 : sm ? 2 : 1}
          spaceBetween={"25"}
          ref={swiperRef}
          className="relative z-10  mySwiper w-full  mb-10 mx-auto overflow-visible"
        >
          {cast.map((item, index) => {
            return (
              <SwiperSlide
                className="relative bg-dark-gray  w-full h-72 flex justify-center items-center"
                key={"cast-chart-item" + index + item.id}
              >
                <Link to="/" className="flex w-full flex-col">
                  <img
                    src={`/assets/casts/${item.id}.webp`}
                    alt=""
                    className="block w-full h-56 object-cover object-top"
                  />
                  <div className="flex flex-col gap-1 justify-center items-center p-4">
                    <p className="text-base">{item.name}</p>
                    <p className="text-sm">{item.knownAs}</p>
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

export default CastChart;
