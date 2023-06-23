import { cast } from "../services/cast";
export const castFinder = (id) => {
  const casts = cast.find((item) => item.id === id);
  return casts;
};
