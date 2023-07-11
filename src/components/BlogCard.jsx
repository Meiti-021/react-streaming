import PropTypes from "prop-types";
import {
  ArrowRight,
  IconCalender,
  IconFilm,
  IconTag,
  UserIcon,
} from "../utils/icons";
import { Link } from "react-router-dom";
const BlogCard = ({
  id,
  date,
  author,
  categories,
  tags,
  title,
  subtitle,
  index,
}) => {
  return (
    <div className="relative flex flex-col gap-6 py-10">
      <img
        src={`/assets/blogs/${id}.webp`}
        alt=""
        className="w-full object-cover aspect-video"
      />
      <div className="flex gap-5">
        <p className="text-sm items-center gap-1 py-2 flex border-l-3 w-fit pl-1 border-light-red bg-gradient-to-r from-dark-red to-black italic ">
          <UserIcon className="w-5 h-5 mb-1" /> {author}
        </p>
        <p className="text-sm items-center gap-1 py-2 flex border-l-3 w-fit pl-1 border-light-red bg-gradient-to-r from-dark-red to-black italic ">
          <IconCalender className="w-5 h-5 mb-1" /> {date}
        </p>
      </div>
      <p className="text-4xl">{title}</p>
      <p className="text-gray">{subtitle}</p>
      <Link
        to={`/blog/${id}`}
        className="h-12  w-44 bg-light-red rounded flex justify-center items-center gap-1"
      >
        READ MORE <ArrowRight />
      </Link>
      <p className="flex items-center gap-1 uppercase">
        <IconFilm /> Categories:
        <span className="bg-slate-700 p-1 text-sm px-2"> {categories} </span>
      </p>
      <p className="flex items-center gap-1 uppercase">
        <IconTag /> Tags:
        {tags
          .split(",")
          .slice(0, 4)
          .map((item) => {
            return (
              <span
                className="bg-slate-700 text-sm p-1 px-2"
                key={item + "tags" + id}
              >
                {item}
              </span>
            );
          })}
      </p>
      <div className="h-[1px] mt-16 w-full bg-gradient-to-r from-black via-gray to-black"></div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  categories: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  index: PropTypes.number,
};

export default BlogCard;
