import { useEffect, useRef, useState } from "react";
import { IconDeny, IconReplay } from "../utils/icons";
import BlogReplay from "./BlogReplay";
import { addReplay } from "../data/blogSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
const BlogComment = ({ name, date, message, replays, id }) => {
  const pageID = useParams().id;
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [replayForm, setReplayForm] = useState({
    name: "",
    date: "",
    message: "",
    id: "",
    to: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReplay({ replayForm, pageID, id }));
    setReplayForm({
      name: "",
      date: moment().format("MMMM D YYYY"),
      message: "",
      id: "",
      to: "",
    });
  };
  const handleReplay = (name) => {
    setReplayForm({
      name: "",
      date: moment().format("MMMM D YYYY"),
      message: "",
      id: "",
      to: name,
    });
  };
  useEffect(() => {
    if (replayForm.to) {
      inputRef.current.focus();
    }
  }, [replayForm.to]);
  return (
    <>
      <div className="flex gap-5 items-start">
        <p className="w-16 text-white bg-light-red uppercase font-bold h-16 rounded-full flex justify-center items-center text-4xl flex-shrink-0">
          {name[0]}
        </p>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center ">
            <p className="text-2xl">{name}</p>
            <p className="text-gray text-sm uppercase">{date}</p>
          </div>
          <p className="w-full h-auto text-gray break-all">{message}</p>
          <button
            className="text-light-red flex gap-1 items-center"
            onClick={() => {
              setReplayForm({ ...replayForm, to: name.split(" ")[0] });
            }}
          >
            <IconReplay className="w-5 h-5 mb-1" /> Replay
          </button>
        </div>
      </div>
      <div className="pl-5 flex flex-col gap-4 mt-5">
        {replays.map((item, index) => {
          return (
            <BlogReplay
              {...item}
              key={item.id + "replays" + index + id}
              handleReplay={handleReplay}
            />
          );
        })}
        {replays.length !== 0 ? <div className="mb-5"></div> : undefined}
        {replayForm.to !== "" ? (
          <form onSubmit={handleSubmit} className="md:col-span-2 mb-5">
            <h2 className="text-3xl capitalize font-bold flex justify-between items-center  mb-5">
              Leave a replay to {replayForm.to}
              <button
                className="text-light-red"
                onClick={() => {
                  setReplayForm({
                    id: "",
                    name: "",
                    message: "",
                    date: "",
                    to: "",
                  });
                }}
              >
                <IconDeny />
              </button>
            </h2>
            <p className="text-gray ">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              <input
                type="text"
                ref={inputRef}
                className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
                required
                placeholder="Your Name*"
                value={replayForm.name}
                onChange={(e) => {
                  setReplayForm({ ...replayForm, name: e.target.value });
                }}
              />

              <input
                type="email"
                className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
                required
                placeholder="Your Email*"
                value={replayForm.id}
                onChange={(e) => {
                  setReplayForm({ ...replayForm, id: e.target.value });
                }}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="sm:col-span-2 text-gray w-full min-h-[8rem] sm:h-14 bg-black p-4 resize-none"
                placeholder="Your Message*"
                value={replayForm.message}
                onChange={(e) => {
                  setReplayForm({ ...replayForm, message: e.target.value });
                }}
              ></textarea>
            </div>
            <button
              className="w-40 h-12 font-roboto mt-5 mb-10 text-sm rounded-sm bg-light-red"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        ) : undefined}
      </div>
    </>
  );
};

BlogComment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  replays: PropTypes.array,
  id: PropTypes.string,
};

export default BlogComment;
