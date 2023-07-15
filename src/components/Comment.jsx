import { Rating } from "@mui/material";
import PropTypes from "prop-types";
const Comment = ({ user, rate, comment, date }) => {
  return (
    <div className="flex gap-8 ">
      <div className="sm:h-20 sm:w-20 h-14 w-14 shrink-0 ">
        <img
          src={user.image}
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="h-full  flex-grow ">
        <div className="flex gap-3 items-center justify-between sm:justify-start">
          <p className="shrink-0">{user.name}</p>
          <p className="text-xs text-gray hidden sm:block">- {date} </p>
          <Rating
            value={rate}
            precision={0.1}
            readOnly
            sx={{
              color: "#E50914",
              fontSize: "1rem",
              ".MuiRating-iconEmpty": {
                color: "white",
              },
            }}
          />
        </div>
        <p className="text-sm mt-2 text-gray">{comment}</p>
        <p className="text-xs text-gray mt-1 sm:hidden">- {date} </p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  user: PropTypes.object,
  rate: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
};

export default Comment;
