import { useState } from "react";
import { Rating, Tab, Tabs } from "@mui/material";
import Comment from "../components/Comment";
import PropTypes from "prop-types";
const reviews = [
  {
    user: {
      id: "user1",
      image: "/assets/others/user1.webp",
      name: "Sodier Boy",
    },
    rate: 4.5,
    comment:
      'Wow, I just watched the movie "Inception" and it completely blew my mind! The complex storyline, stunning visuals, and mind-bending concept kept me on the edge of my seat throughout the entire film.',
    date: "June, 26th, 2023",
  },
  {
    user: {
      id: "user2",
      image: "/assets/others/user2.webp",
      name: "Gralt of rivia",
    },
    rate: 2.8,
    comment: "Overrated as f*k in my opinion",
    date: "Feb, 12th, 2021",
  },
  {
    user: {
      id: "user3",
      image: "/assets/others/user3.webp",
      name: "Harley Queen",
    },
    rate: 5,
    comment: "Pretty good. main character was realy cute!",
    date: "July, 03th, 2023",
  },
  {
    user: {
      id: "user4",
      image: "/assets/others/user4.webp",
      name: "Homelander",
    },
    rate: 4.6,
    comment: "i loved it. that was realy fun and exciting",
    date: "Sep, 09th, 2021",
  },
];
import { useMediaQuery } from "@mui/material";
import { enqueueSnackbar } from "notistack";
const ShowSource = ({ movie, season, setEpisode, episode }) => {
  const sm = useMediaQuery("(min-width: 640px)");
  const [value, setValue] = useState(0);
  const [review, setReview] = useState({
    comment: "",
    rate: 0,
    date: "",
    user: {
      id: "",
      name: "",
    },
  });
  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          textColor="white"
          TabIndicatorProps={{
            style: { backgroundColor: "#E50914" },
          }}
        >
          <Tab
            label="Episodes"
            sx={{
              color: value == 0 ? "#E50914" : "white",
              fontFamily: "Roboto",
              fontSize: !sm && "0.8rem",
            }}
          />
          <Tab
            label="Reviews"
            sx={{
              color: value == 1 ? "#E50914" : "white",
              fontFamily: "Roboto",
              fontSize: !sm && "0.8rem",
            }}
          />
          <Tab
            label="Description"
            sx={{
              color: value == 2 ? "#E50914" : "white",
              fontFamily: "Roboto",
              fontSize: !sm && "0.8rem",
            }}
          />
        </Tabs>
      </div>
      <div className="py-10">
        {value === 0 ? (
          <div className="flex flex-col  gap-4">
            {movie.series[season].episodes.map((item, index) => {
              return (
                <button
                  className={`flex h-24 gap-4 w-full max-w-sm `}
                  key={item.video}
                  onClick={() => {
                    setEpisode(index);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={`/assets/collections/${movie.thumbImage}`}
                    alt=""
                    className="block w-36 h-full object-cover object-top"
                  />
                  <div className="flex flex-col gap-2 justify-center">
                    <p
                      className={`${
                        episode === index ? "text-light-red" : undefined
                      }`}
                    >
                      {`Season ${season + 1} Episode ${index + 1}`}
                    </p>
                    <p className="text-sm text-gray  text-left">
                      {item.timing}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        ) : value === 1 ? (
          <div className="flex flex-col gap-10">
            {reviews.map((item, index) => {
              return (
                <Comment {...item} key={item.user.id + "comment" + index} />
              );
            })}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enqueueSnackbar({
                  variant: "error",
                  message:
                    "You should login to your account to be able to send review on this section!",
                });
              }}
              className="grid grid-cols-2 gap-4"
            >
              <p className="text-2xl col-span-2"> Add a review</p>
              <p className="text-sm text-gray col-span-2">
                Your email address will not be published. Required fields are
                marked <sup className="text-light-red">*</sup> .
              </p>
              <div className="flex gap-3 text-sm items-center col-span-2">
                Your Rate:
                <Rating
                  value={review.rate}
                  precision={0.1}
                  aria-required
                  onChange={(e, newValue) => {
                    setReview({ ...review, rate: newValue });
                  }}
                  sx={{
                    color: "#E50914",
                    fontSize: "1.2rem",
                    marginTop: "-0.2rem",
                    ".MuiRating-iconEmpty": {
                      color: "white",
                    },
                  }}
                />
              </div>
              <div className=" flex flex-col gap-2 col-span-2 sm:col-span-1">
                <p className="text-sm text-gray">
                  name: <sup className="text-light-red">*</sup>
                </p>
                <input
                  type="text"
                  className="bg-black w-full h-12 border-none outline-none p-3 focus:border-none"
                  value={review.user.name}
                  onChange={(e) => {
                    setReview({
                      ...review,
                      user: { ...review.user, name: e.target.value },
                    });
                  }}
                  required
                />
              </div>
              <div className=" flex flex-col gap-2 col-span-2 sm:col-span-1">
                <p className="text-sm text-gray">
                  email: <sup className="text-light-red">*</sup>
                </p>
                <input
                  type="email"
                  className="bg-black w-full h-12 border-none outline-none p-3 focus:border-none"
                  value={review.user.id}
                  onChange={(e) => {
                    setReview({
                      ...review,
                      user: { ...review.user, id: e.target.value },
                    });
                  }}
                  required
                />
              </div>
              <div className=" flex flex-col gap-2  col-span-2">
                <p className="text-sm text-gray flex">
                  <p>
                    Review: <sup className="text-light-red">*</sup>
                  </p>
                  <p className="ml-auto">{review.comment.length}/300</p>
                </p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="bg-black z-0 relative w-full resize-none h-20 border-none outline-none p-3 focus:border-none "
                  onChange={(e) => {
                    if (review.comment.length < 300) {
                      setReview({ ...review, comment: e.target.value });
                    }
                  }}
                  value={review.comment}
                  required
                ></textarea>
              </div>

              <div className="flex gap-3 items-center my-3 col-span-2">
                <input type="checkbox" id="checkbox" className="-mt-1" />
                <label htmlFor="checkbox">
                  Save my name, email, and website in this browser for the next
                  time i comment
                </label>
              </div>
              <button
                className="w-40 rounded-sm  h-12 bg-light-red"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        ) : (
          <p>{movie.description}</p>
        )}
      </div>
    </div>
  );
};

ShowSource.propTypes = {
  movie: PropTypes.object,
  season: PropTypes.number,
  episode: PropTypes.number,
  setEpisode: PropTypes.func,
};

export default ShowSource;
