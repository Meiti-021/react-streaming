import { IconReplay } from "../utils/icons";
import PropTypes from "prop-types";
const BlogReplay = ({ name, date, message, to, handleReplay }) => {
  return (
    <div className="flex gap-5 items-start  ">
      <p className="w-14  uppercase h-14 bg-gray text-white  rounded-full flex justify-center items-center text-xl flex-shrink-0">
        {name[0]}
      </p>
      <div className=" w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="">{name}</p>
          <p className="text-gray text-xs uppercase">{date}</p>
        </div>
        <p className="text-gray break-words overflow-hidden break-all">
          <span className="text-yellow-300 mr-1">@{to.split(" ")[0]}</span>{" "}
          {message}
        </p>
        <button
          className="text-light-red flex gap-1 items-center text-sm"
          onClick={() => handleReplay(name)}
        >
          <IconReplay className="w-4 h-4 mb-1" /> Replay
        </button>
      </div>
    </div>
  );
};

BlogReplay.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  to: PropTypes.string,
  handleReplay: PropTypes.func,
};
export default BlogReplay;
