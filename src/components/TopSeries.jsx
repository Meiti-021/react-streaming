import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { shows } from "../services/shows";
import { Navigation } from "swiper";
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { useEffect, useRef, useState } from "react";
import { Rating, Tab, Tabs } from "@mui/material";
import { castFinder } from "../utils/utils";
import { Link } from "react-router-dom";

const TopSeries = () => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  const bigSwiper = useRef(null);
  useEffect(() => {
    setValue(0);
  }, [index]);

  const nextSlide = () => {
    bigSwiper.current.swiper.slideNext();
  };
  const prevSlide = () => {
    bigSwiper.current.swiper.slidePrev();
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full relative h-[45rem] lg:min-h-screen bg-green-400 ">
      <Swiper
        modules={[Navigation]}
        ref={bigSwiper}
        loop={true}
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
          <div className=" right-0 2xl:right-20 hidden 2xl:flex overflow-hidden   absolute w-[28rem] bg-dark-gray h-[40rem] top-0 bottom-0 my-auto ">
            <div className=" w-full h-full">
              <div className="relative flex flex-col gap-2 items-center w-full p-7 pb-0  ">
                <p className="text-xl text-center">All Episodes</p>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{ position: "relative", zIndex: "10" }}
                >
                  {shows[index].series.map((item) => {
                    return (
                      <Tab
                        label={item.title}
                        sx={{ fontFamily: "roboto", paddingBottom: "15px" }}
                        key={item.episodes[0].id + "tabs"}
                      />
                    );
                  })}
                </Tabs>
                <div className="absolute h-[0.1rem] bottom-0 bg-gray w-full"></div>
              </div>
              <div className="relative flex flex-col  gap-4 items-center w-full p-7 pb-0  ">
                {shows[index].series[value].episodes
                  .slice(0, 5)
                  .map((episode, epIndex) => {
                    return (
                      <Link className="flex h-20 gap-4 w-full" key={episode.id}>
                        <img
                          src={`/assets/collections/${shows[index].thumbImage}`}
                          alt=""
                          className="block w-36 h-full object-cover object-top"
                        />
                        <div className="flex flex-col gap-2 justify-center">
                          <p>
                            {"season" +
                              " " +
                              (value + 1) +
                              " " +
                              " episode " +
                              (epIndex + 1)}
                          </p>
                          <p className="text-sm text-gray">{episode.timing}</p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 left-10  text-white p-5 lg:p-10  w-full h-[30rem] max-w-4xl lg:absolute top-0 bottom-0 my-auto">
            <div className=" flex  gap-5 items-center text-white font-roboto-slab">
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
            <p className="  font-roboto text-6xl lg:text-[5.2rem] font-extrabold bg-[url(/assets/others/bg.webp)] bg-clip-text text-transparent">
              {shows[index].title}
            </p>
            <p className="  text-gray font-roboto-slab mb-5">
              {shows[index].description.length > 250
                ? shows[index].description.substring(0, 250) + "..."
                : shows[index].description}
            </p>
            <div className="  grid grid-cols-2 lg:flex gap-5 items-center font-roboto-slab ">
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
            <div className="flex justify-between items-center    mt-12">
              <Link
                to={"/"}
                className="flex justify-center items-center w-40 gap-1 p-3  px-8 font-bold text-sm rounded-sm bg-light-red"
              >
                STREAM NOW
              </Link>
              <div className="flex text-gray gap-3">
                <button
                  className="border-1 border-gray p-1 rounded-full"
                  onClick={() => {
                    prevSlide();
                    setValue(0);
                  }}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="border-1 border-gray p-1 rounded-full"
                  onClick={() => {
                    nextSlide();
                    setValue(0);
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

export default TopSeries;
