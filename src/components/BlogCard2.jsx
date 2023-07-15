import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BlogCard2 = ({ id, title, subtitle }) => {
  return (
    <div className="relative flex flex-col gap-3 py-10">
      <img
        src={`/assets/blogs/${id}.webp`}
        alt=""
        className="w-full object-cover aspect-video"
      />

      <p className="text-2xl">{title}</p>
      <p className="text-gray">{subtitle}</p>
      <Link to={`/blog/${id}`} className="text-light-red">
        READ MORE
      </Link>
      <div className="h-[1px] mt-16 w-full bg-gradient-to-r from-black via-gray to-black"></div>
    </div>
  );
};

BlogCard2.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  categories: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  index: PropTypes.number,
};

export default BlogCard2;
