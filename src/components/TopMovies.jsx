import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { movies } from "../services/movies";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useMediaQuery } from "@mui/material";
const TopMovies = () => {
  const swiperRef = useRef(null);
  const xl = useMediaQuery("(min-width: 1200px)");
  const lg = useMediaQuery("(min-width: 1027px)");
  const md = useMediaQuery("(min-width: 768px)");
  const sm = useMediaQuery("(min-width: 640px)");
  return (
    <section className="p-10 ">
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <header className="mb-5">
          <h2 className="text-2xl">Top 10 Movies To Watch</h2>
        </header>
        <div className=" relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={xl ? 5 : lg ? 4 : md ? 3 : sm ? 2 : 1}
            spaceBetween={"40"}
            ref={swiperRef}
            className="relative z-10 mySwiper  overflow-visible mb-10"
          >
            {movies.map((item, index) => {
              return (
                <SwiperSlide
                  className="relative h-96 rounded-sm"
                  key={"top10-swiper-sm" + item.id}
                >
                  <Link className="relative  w-full h-full block ">
                    <img
                      src={`/assets/collections/${item.mainImage}`}
                      alt=""
                      className=" block w-full h-full object-cover"
                    />
                  </Link>
                  <p className="absolute text-[7rem] font-extrabold text-transparent bg-clip-text bg-[url(/assets/others/bg.webp)] right-0 left-0 mx-auto -bottom-20">
                    {index + 1}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="absolute top-0 bottom-0 text-light-red -left-6 my-auto z-20 "
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
            }}
          >
            <ArrowLeft className="h-20 w-20" />
          </button>
          <button
            className="absolute top-0 bottom-0  text-light-red  -right-6 my-auto z-20 "
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
          >
            <ArrowRight className="h-20 w-20" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
