import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { blogs } from "../services/blog";
import moment from "moment/moment";
import Page from "../components/Page";
import {
  IconCalender,
  SearchIcon,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  ArrowLeft,
  ArrowRight,
  UserIcon,
  IconDeny,
} from "../utils/icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import BlogComment from "../components/BlogComment";
import { addComment } from "../data/blogSlice";
const SingleBlog = () => {
  const { blogsData } = useSelector((store) => store.blogData);
  const { id } = useParams();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [data, setData] = useState(null);
  const [blog, setBlog] = useState(null);
  const [review, setReview] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    id: "",
    name: "",
    message: "",
    date: moment().format("MMMM D YYYY"),
    replays: [],
  });
  const [pageIndex, setPageIndex] = useState(null);
  useEffect(() => {
    const myData = blogs.find((item) => item.id === id);
    const myStoreData = blogsData.find((item) => item.id === id);
    const myDataIndex = blogs.findIndex((item) => item.id === id);

    if (myData) {
      setData(myStoreData);
      setBlog(myData);
      setPageIndex(myDataIndex);
    }
  }, [id, blogsData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ form, id }));
    setForm({
      name: "",
      date: "",
      message: "",
      id: "",
      replays: [],
    });
  };
  useEffect(() => {
    if (review) {
      inputRef.current.focus();
    }
  }, [review]);

  if (blog === null) {
    return <>oh Sorry</>;
  }

  return (
    <Page title={blog.title}>
      <div className=" grid lgp:grid-cols-3 gap-10">
        <div className=" lgp:col-span-2 w-full">
          <div className="relative w-full">
            <img
              src={`/assets/blogs/${blog.id}.webp`}
              alt=""
              className="w-full object-cover aspect-video block"
            />
            <div className="flex gap-5 my-5">
              <p className="text-sm items-center gap-1 py-2 flex border-l-3 w-fit pl-1 border-light-red bg-gradient-to-r from-dark-red to-black italic ">
                <UserIcon className="w-5 h-5 mb-1" /> {blog.author}
              </p>
              <p className="text-sm items-center gap-1 py-2 flex border-l-3 w-fit pl-1 border-light-red bg-gradient-to-r from-dark-red to-black italic ">
                <IconCalender className="w-5 h-5 mb-1" /> {blog.date}
              </p>
            </div>
            {blog.body}{" "}
            <div className="h-[1px] mt-16 w-full bg-gradient-to-r from-black via-gray to-black"></div>
          </div>
          <div className=" flex justify-between items-center mt-20">
            <div className="flex flex-col gap-3 text-gray">
              <Link
                className="flex items-center gap-2 italic text-lg"
                to={
                  pageIndex === 0
                    ? `/blog/${blogs[blogs.length - 1].id}`
                    : `/blog/${blogs[pageIndex - 1].id}`
                }
              >
                <ArrowLeft /> Previous Page
              </Link>
              <Link
                className="font-semibold text-lg hidden md:block"
                to={
                  pageIndex === 0
                    ? `/blog/${blogs[blogs.length - 1].id}`
                    : `/blog/${blogs[pageIndex - 1].id}`
                }
              >
                {pageIndex === 0
                  ? blogs[blogs.length - 1].title
                  : blogs[pageIndex - 1].title}
              </Link>
            </div>
            <div className="flex flex-col gap-3 text-gray ">
              <Link
                className="flex items-center gap-2 italic justify-end text-lg"
                to={
                  pageIndex === blogs.length - 1
                    ? `/blog/${blogs[0].id}`
                    : `/blog/${blogs[pageIndex + 1].id}`
                }
              >
                Next Page <ArrowRight />
              </Link>
              <Link
                className="font-semibold text-lg hidden md:block"
                to={
                  pageIndex === blogs.length - 1
                    ? `/blog/${blogs[0].id}`
                    : `/blog/${blogs[pageIndex + 1].id}`
                }
              >
                {pageIndex === blogs.length - 1
                  ? blogs[0].title
                  : blogs[pageIndex + 1].title}
              </Link>
            </div>
          </div>
          <div className=" mt-10">
            <p className="text-3xl font-semibold flex justify-between items-center">
              Comments({data.comments.length})
              <button
                className="text-lg text-light-red"
                onClick={() => {
                  setReview(true);
                }}
              >
                Add Review{" "}
              </button>
            </p>
            <div className="flex flex-col gap-5 mt-10">
              {data.comments.map((item, index) => {
                return (
                  <BlogComment
                    {...item}
                    key={item.id + index + "comment-on-" + blog.id}
                  />
                );
              })}
              {review ? (
                <form onSubmit={handleSubmit} className="md:col-span-2 mb-5">
                  <h2 className="text-3xl capitalize font-bold flex justify-between items-center  mb-5">
                    Leave a replay
                    <button
                      className="text-light-red"
                      onClick={() => {
                        setReview(false);
                        setForm({
                          id: "",
                          name: "",
                          message: "",
                          date: "",
                          replays: [],
                        });
                      }}
                    >
                      <IconDeny />
                    </button>
                  </h2>
                  <p className="text-gray ">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                    <input
                      type="text"
                      ref={inputRef}
                      className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
                      required
                      placeholder="Your Name*"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                      }}
                    />

                    <input
                      type="email"
                      className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
                      required
                      placeholder="Your Email*"
                      value={form.id}
                      onChange={(e) => {
                        setForm({ ...form, id: e.target.value });
                      }}
                    />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="sm:col-span-2 text-gray w-full min-h-[8rem] sm:h-14 bg-black p-4 resize-none"
                      placeholder="Your Message*"
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
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
          </div>
        </div>
        <div className="lgp:col-span-1 w-full flex flex-col gap-10">
          <div className="p-10 flex justify-center items-center bg-gradient-to-b from-dark-gray to-black">
            <input
              type="text"
              className="w-full h-full p-3 focus:outline-none  bg-black"
              placeholder="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Link
              to={`/blog/search/${form}`}
              className="w-16 h-full flex justify-center items-center bg-light-red"
            >
              <SearchIcon className={"w-5 h-5"} />
            </Link>
          </div>

          <div className="p-10 flex  flex-col  bg-gradient-to-b from-dark-gray to-black">
            <p className="text-2xl font-semibold">Recent Posts </p>
            <div className="flex flex-col gap-8 mt-10">
              {blogs.slice(0, 3).map((item) => {
                return (
                  <Link
                    to={`/blog/${item.id}`}
                    className="flex items-center gap-5"
                    key={item.id + "blog-sidebar"}
                  >
                    <img
                      src={`/assets/blogs/${item.id}.webp`}
                      alt=""
                      className="block w-16 h-16 object-cover"
                    />
                    <div className="flex flex-col gap-2 justify-center overflow-hidden">
                      <p className="whitespace-nowrap text-ellipsis  overflow-hidden">
                        {item.title}
                      </p>
                      <p className="flex text-sm gap-2 items-center text-gray">
                        <IconCalender className="w-5 h-5 text-light-red mb-1" />{" "}
                        {item.date}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="p-10 flex  flex-col  bg-gradient-to-b from-dark-gray to-black">
            <p className="text-2xl font-semibold">Categories </p>
            <div className="flex flex-col mt-10">
              {blogs[0].tags.split(",").map((item, index) => {
                return (
                  <Link
                    to={`/blog/search/${item}`}
                    className="capitalize py-4 text-gray border-b-1 border-[rgba(255,255,255,0.1)] hover:pl-1  transition-all duration-300 "
                    key={item.id + "blog-sidebar-categories" + index}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="p-10 flex  flex-col  bg-gradient-to-b from-dark-gray to-black">
            <p className="text-2xl font-semibold">TAGS: </p>
            <div className="flex flex-wrap mt-10 gap-2">
              {blogs[0].tags.split(",").map((item, index) => {
                return (
                  <Link
                    to={`/blog/search/${item}`}
                    className="w-auto px-5 capitalize rounded-sm py-2 text-gray text-sm  bg-[rgba(255,255,255,0.1)]"
                    key={item.id + "blog-sidebar-categories" + index}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="p-10 flex  flex-col  bg-gradient-to-b from-dark-gray to-black">
            <p className="text-lg">Follow US: </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="/"
                className="p-2 bg-gray rounded-full flex justify-center items-center text-black"
              >
                <IconFacebook className={"w-4 h-4"} />
              </a>
              <a
                href="/"
                className="p-2 bg-gray rounded-full flex justify-center items-center text-black"
              >
                <IconInstagram className={"w-4 h-4"} />
              </a>

              <a
                href="/"
                className="p-2 bg-gray rounded-full flex justify-center items-center text-black"
              >
                <IconLinkedin className={"w-4 h-4"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default SingleBlog;
