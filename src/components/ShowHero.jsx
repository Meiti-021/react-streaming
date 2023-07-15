import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { shows } from "../services/shows";
import { Navigation } from "swiper";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "../utils/icons";
import { useEffect, useRef, useState } from "react";
import { Rating } from "@mui/material";
import { castFinder } from "../utils/utils";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
const ShowHero = () => {
  const [index, setIndex] = useState(0);
  const bigSwiper = useRef(null);
  const smallSwiper = useRef(null);
  const nextBtn = useRef(null);
  useEffect(() => {
    anime({
      targets: ".animated",
      translateX: -160,

      delay: function (el, i) {
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
      delay: function (el, i) {
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
        {shows.map((item, index) => {
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
      <div className="absolute w-full h-full z-10 bg-gradient-to-l  to-[rgba(0,0,0,0.9)] from-[rgba(0,0,0,0.3)]  "></div>
      <div className="absolute w-full h-full z-20 mt-16 p-5 2xl:p-10">
        <div className="relative  h-full max-w-screen-2xl mx-auto">
          <div className=" left-0 2xl:left-20 hidden 2xl:flex overflow-hidden  justify-center p-9 pb-20 absolute w-[30rem] h-[35rem] top-0 bottom-0 my-auto ">
            <div className="relative w-full h-full ">
              <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                spaceBetween={"20"}
                direction="vertical"
                ref={smallSwiper}
                className=" w-full h-full  "
                loop={true}
              >
                {shows.map((item) => {
                  return (
                    <SwiperSlide
                      className="relative pointer-events-none w-full h-f flex justify-center items-center  "
                      key={"hero-swiper-sm" + item.id}
                    >
                      {({ isActive }) => (
                        <>
                          <img
                            src={`/assets/collections/${item.mainImage}`}
                            alt=""
                            className="block w-full h-full object-cover"
                          />
                          <div
                            className={`absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black to-[rgba(0,0,0,0)] ${
                              isActive
                                ? "border-b-2 border-light-red"
                                : undefined
                            }`}
                          ></div>
                          <div className="absolute w-full h-16 p-3 px-5 bottom-0 text-white">
                            <p>{item.title}</p>
                            <p className="text-xs mt-1">{item.timing}</p>
                          </div>
                        </>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="absolute z-20 flex flex-col  text-gray gap-3  left-0 top-0 bottom-0 my-auto  h-20">
              <button
                className="border-1 border-gray p-1 rounded-full"
                onClick={() => {
                  prevSlide();
                }}
              >
                <ArrowUp />
              </button>
              <button
                className="border-1 border-gray p-1 rounded-full"
                onClick={() => {
                  nextSlide();
                }}
                ref={nextBtn}
              >
                <ArrowDown />
              </button>
            </div>
          </div>
          <div
            key={"hero-info-genres" + shows[index].id}
            className="flex flex-col gap-5 right-10 translate-x-40 text-white p-5 lg:p-10  w-full h-[30rem] max-w-4xl lg:absolute top-0 bottom-0 my-auto"
          >
            <div className="animated faded flex  gap-5 items-center text-white font-roboto-slab">
              <div className="bg-white w-10 text-black h-7 font-bold flex justify-center items-center rounded-sm">
                G
              </div>
              {shows[index].genres.split(",").map((item, num) => {
                return (
                  <div
                    className="flex items-center"
                    key={item + "home-hero-poster" + num}
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <p
              key={"hero-info-titles" + shows[index].id}
              className="animated faded font-roboto whitespace-nowrap text-ellipsis text-6xl lg:text-[5.2rem] font-extrabold bg-[url(/assets/others/bg.webp)] bg-clip-text text-transparent"
            >
              {shows[index].title}
            </p>
            <p
              key={"hero-info-description" + shows[index].id}
              className="animated faded text-gray font-roboto-slab mb-5"
            >
              {shows[index].description.length > 250
                ? shows[index].description.substring(0, 250) + "..."
                : shows[index].description}
            </p>
            <div
              key={"hero-info-detail" + shows[index].id}
              className="animated faded grid grid-cols-2 lg:flex gap-5 items-center font-roboto-slab "
            >
              <Rating
                value={(shows[index].imdbRate * 5) / 10}
                readOnly
                precision={0.5}
              />
              <div className="flex items-center gap-2">
                <p>{(shows[index].imdbRate * 5) / 10}</p>
                <img
                  src="/assets/others/imdb.webp"
                  alt=""
                  className="h-6 object-contain"
                />
              </div>
              <p className=" flex items-center whitespace-nowrap lg:text-sm">
                {shows[index].timing}
              </p>
              <p className="col-span-2 text-light-red font-semibold lg:text-sm flex items-center">
                Genres:{" "}
                <span className="text-white ml-1 text-sm">
                  {shows[index].genres.split(",")[0]}
                </span>
              </p>
              <div className=" text-light-red lg:text-sm font-semibold flex items-center whitespace-nowrap">
                Casts:{" "}
                <div className="text-white ml-2 text-sm flex ">
                  {shows[index].casts.slice(0, 2).map((item, index) => {
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
                </div>
              </div>
            </div>
            <div
              key={"hero-info-button" + shows[index].id}
              className="flex justify-between items-center  animated faded mt-12"
            >
              <Link
                to={"/"}
                className=" uppercase flex justify-center items-center w-40 gap-1 p-3  px-8 font-bold text-sm rounded-sm bg-light-red"
              >
                Stream Now
              </Link>
              <div className="flex text-gray gap-3 2xl:hidden">
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

export default ShowHero;
