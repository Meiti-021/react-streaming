import { useState } from "react";
import BlogCard from "../components/BlogCard";
import Page from "../components/Page";
import { blogs } from "../services/blog";
import {
  IconCalender,
  SearchIcon,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconLoader,
} from "../utils/icons";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
const BlogInfiniteScroll = () => {
  const [page, setPage] = useState(4);
  const [loading, setLoading] = useState(false);
  const container = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (page < blogs.length - 8) {
        window.removeEventListener("scroll", () => {
          setLoading(false);
        });
      }
      if (container.current.getBoundingClientRect().bottom < 1000) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setPage(page + 4);
        }, 1500);
      }
    });
  }, [page]);
  const [form, setForm] = useState("");
  return (
    <Page title="blog">
      <div className="grid lgp:grid-cols-3 gap-10">
        <div className="lgp:col-span-2 w-full" ref={container}>
          {blogs.slice(0, page).map((item, index) => {
            return (
              <BlogCard
                {...item}
                key={item.id + "-blog-listing"}
                index={index}
              />
            );
          })}
          {loading ? (
            <div className="w-full flex justify-center items-center ">
              <IconLoader className="w-14 h-14 animate-spin duration-500" />
            </div>
          ) : undefined}
        </div>
        <div className="lgp:col-span-1 w-full flex flex-col gap-10">
          <div className="p-10 flex justify-center items-center bg-gradient-to-b from-dark-gray to-black">
            <input
              type="text"
              className="w-full h-full p-3 focus:outline-none  bg-black"
              placeholder="search"
              value={form}
              onChange={(e) => {
                setForm(e.target.value);
              }}
            />
            <Link
              to={`/blog/search/${form}`}
              className="w-16 h-full flex justify-center items-center bg-light-red"
            >
              <SearchIcon className={"w-5 h-5"} />{" "}
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

export default BlogInfiniteScroll;
