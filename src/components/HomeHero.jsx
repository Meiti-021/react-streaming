import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { movies } from "../services/movies";
import { Navigation } from "swiper";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useEffect, useRef, useState } from "react";
import { Rating } from "@mui/material";
import { castFinder } from "../utils/utils";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const bigSwiper = useRef(null);
  const smallSwiper = useRef(null);
  const nextBtn = useRef(null);
  // useEffect(() => {
  //   setInterval(() => {
  //     nextSlide();
  //   }, 7000);
  // }, []);
  useEffect(() => {
    anime({
      targets: ".animated",
      translateX: -160,

      delay: function (el, i, l) {
        return i * 100;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100;
      },
      duration: 2000,
    });
  }, [index]);
  useEffect(() => {
    anime({
      targets: ".faded",
      opacity: [0, 1],
      delay: function (el, i, l) {
        return i * 100;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100;
      },
      duration: 4000,
    });
  }, [index]);

  const nextSlide = () => {
    bigSwiper.current.swiper.slideNext();
    smallSwiper.current.swiper.slideNext();
  };
  const prevSlide = () => {
    bigSwiper.current.swiper.slidePrev();
    smallSwiper.current.swiper.slidePrev();
  };
  return (
    <div className="w-full relative h-[45rem] lg:min-h-screen bg-green-400 ">
      <Swiper
        modules={[Navigation]}
        loop={true}
        ref={bigSwiper}
        className="mySwiper absolute w-full h-full top-0 left-0  "
      >
        {movies.map((item, index) => {
          return (
            <SwiperSlide
              className="w-full h-full flex justify-center  items-center"
              key={"hero-swiper-bg" + item.id}
            >
              {({ isActive }) => (
                <img
                  src={`/assets/collections/${item.mainImage}`}
                  alt=""
                  className="block w-full h-full object-cover"
                  onClick={isActive ? setIndex(index) : undefined}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute w-full h-full z-10 bg-gradient-to-l  from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.3)]  to-[rgba(0,0,0,1)]"></div>
      <div className="absolute w-full h-full z-20 mt-16 p-5 lg:p-10">
        <div className="h-full max-w-screen-2xl mx-auto">
          <div className="-right-[75%] hidden xl:block overflow-hidden p-9 pb-20 absolute w-full h-[28rem] top-0 bottom-0 my-auto bg-dark-gray">
            <div className="w-[32rem] h-full">
              <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                spaceBetween={"20"}
                loop={true}
                ref={smallSwiper}
                className=" w-full h-full  "
              >
                {movies.map((item) => {
                  return (
                    <SwiperSlide
                      className="relative pointer-events-none w-full h-f flex justify-center items-center"
                      key={"hero-swiper-sm" + item.id}
                    >
                      <img
                        src={`/assets/collections/${item.mainImage}`}
                        alt=""
                        className="block w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black to-[rgba(0,0,0,0)]"></div>
                      <div className="absolute w-full h-16 p-3 px-5 bottom-0 text-white">
                        <p>{item.title}</p>
                        <p className="text-xs mt-1">{item.timing}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex text-gray gap-3 mt-5">
              <button
                className="border-1 border-gray p-1 rounded-full"
                onClick={() => {
                  prevSlide();
                }}
              >
                <ArrowLeft />
              </button>
              <button
                className="border-1 border-gray p-1 rounded-full"
                onClick={() => {
                  nextSlide();
                }}
                ref={nextBtn}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div
            key={"hero-info-genres" + movies[index].id}
            className="flex flex-col gap-5 translate-x-40 text-white p-5 lg:p-10  w-full h-[30rem] max-w-4xl lg:absolute top-0 bottom-0 my-auto"
          >
            <div className="animated faded flex  gap-5 items-center text-white font-roboto-slab">
              <div className="bg-white w-10 text-black h-7 font-bold flex justify-center items-center rounded-sm">
                G
              </div>
              {movies[index].genres.split(",").map((item) => {
                return (
                  <div
                    className="flex items-center"
                    key={item.id + "home-hero-poster"}
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <p
              key={"hero-info-titles" + movies[index].id}
              className="animated faded font-roboto text-6xl lg:text-[5.2rem] font-extrabold bg-[url(/assets/others/bg.webp)] bg-clip-text text-transparent"
            >
              {movies[index].title}
            </p>
            <p
              key={"hero-info-description" + movies[index].id}
              className="animated faded text-gray font-roboto-slab mb-5"
            >
              {movies[index].description.length > 250
                ? movies[index].description.substring(0, 250) + "..."
                : movies[index].description}
            </p>
            <div
              key={"hero-info-detail" + movies[index].id}
              className="animated faded grid grid-cols-2 lg:flex gap-5 items-center font-roboto-slab "
            >
              <Rating
                value={(movies[index].imdbRate * 5) / 10}
                readOnly
                precision={0.5}
              />
              <div className="flex items-center gap-2">
                <p>{(movies[index].imdbRate * 5) / 10}</p>
                <img
                  src="/assets/others/imdb.webp"
                  alt=""
                  className="h-6 object-contain"
                />
              </div>
              <p className=" flex items-center whitespace-nowrap lg:text-sm">
                {movies[index].timing}
              </p>
              <p className=" text-light-red font-semibold lg:text-sm flex items-center">
                Genres:{" "}
                <span className="text-white ml-1 text-sm">
                  {movies[index].genres.split(",")[0]}
                </span>
              </p>
              <p className=" text-light-red lg:text-sm font-semibold flex items-center whitespace-nowrap">
                Casts:{" "}
                <span className="text-white ml-2 text-sm flex ">
                  {movies[index].casts.slice(0, 2).map((item, index) => {
                    return index !== 1 ? (
                      <p key={"movie-starr" + item.id} className="mr-2">
                        {castFinder(item.id).name + ","}
                      </p>
                    ) : (
                      <p key={"movie-starr" + item.id} className="mr-2">
                        {castFinder(item.id).name}
                      </p>
                    );
                  })}
                </span>
              </p>
            </div>
            <div
              key={"hero-info-button" + movies[index].id}
              className="flex justify-between items-center  animated faded mt-12"
            >
              <Link
                to={"/"}
                className=" uppercase flex justify-center items-center w-40 gap-1 p-3  px-8 font-bold text-sm rounded-sm bg-light-red"
              >
                Stream Now
              </Link>
              <div className="flex text-gray gap-3 lg:hidden">
                <button
                  className="border-1 border-gray p-1 rounded-full"
                  onClick={() => {
                    prevSlide();
                  }}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="border-1 border-gray p-1 rounded-full"
                  onClick={() => {
                    nextSlide();
                  }}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
