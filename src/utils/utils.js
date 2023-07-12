import { cast } from "../services/cast";
export const castFinder = (id) => {
  const casts = cast.find((item) => item.id === id);
  return casts;
};
export const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const fancyTimeFormat = (duration) => {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
};
