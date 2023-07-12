import { useRef } from "react";
import { LinearProgress } from "@mui/material";
import { useState } from "react";
import { IconNext, IconPause, IconPlay, IconPrev } from "../utils/icons";
import { fancyTimeFormat } from "../utils/utils";
const Audio = ({ src, title, name, image }) => {
  const media = useRef(null);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  return (
    <>
      <audio
        src={src}
        onTimeUpdate={(e) => {
          setTime(e.target.currentTime);
        }}
        onCanPlay={(e) => {
          setDuration(e.target.duration);
        }}
        ref={media}
      ></audio>
      ;
      <div className="relative my-10 w-full p-10 flex-col justify-center items-center rounded-lg h-44">
        <img
          src={image}
          alt=""
          className="block object-cover w-full h-full blur-md absolute top-0 left-0"
        />
        <div className="relative z-10 h-32 w-full flex gap-5">
          <img
            src={image}
            alt=""
            className="block object-cover w-32 h-32 rounded"
          />
          <div className="flex flex-col">
            <p>{name}</p>
            <p className="text-xl font-semibold mt-1">{title}</p>
            <div className="flex items-center gap-2 mt-4">
              <button className="p-1 bg-[rgba(255,255,255,0.2)] rounded-full">
                <IconPrev className="w-5 h-5" />{" "}
              </button>
              <button
                className="w-12 h-12 flex justify-center items-center bg-[rgba(255,255,255,0.2)] rounded-full"
                onClick={() => {
                  if (isPlay) {
                    media.current.pause();
                    setIsPlay(false);
                  } else {
                    media.current.play();
                    setIsPlay(true);
                  }
                }}
              >
                {isPlay ? <IconPause /> : <IconPlay />}
              </button>
              <button className="p-1 bg-[rgba(255,255,255,0.2)] rounded-full">
                <IconNext className="w-5 h-5" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5 relative">
          <p className="text-sm font-roboto-slab"> {fancyTimeFormat(time)} </p>
          <LinearProgress
            variant="determinate"
            value={(time * 100) / duration}
            sx={{ width: "100%" }}
          />
          <p className="text-sm font-roboto-slab">
            {fancyTimeFormat(duration)}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Audio;
