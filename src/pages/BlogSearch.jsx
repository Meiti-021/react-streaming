import { useEffect, useState } from "react";
import BlogCard2 from "../components/BlogCard2";
import Page from "../components/Page";
import { blogs } from "../services/blog";
import { useNavigate, useParams } from "react-router-dom";
const BlogSearch = () => {
  const { word } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const array = blogs.filter((item) => {
      if (
        item.title.toLowerCase().includes(word.toLowerCase()) ||
        item.categories.toLowerCase().includes(word.toLowerCase()) ||
        item.tags.toLowerCase().includes(word.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(word.toLowerCase())
      ) {
        return item;
      }
    });
    setSearch(array);
  }, [word]);
  if (!search.length) {
    return (
      <Page title={`blogs?=${word.substring(0, 7)}...`}>
        <div className="h-96 flex flex-col justify-center gap-5 items-center">
          <p>SORRY,NOTHING FOUND!</p>
          <button
            className="h-10 text-sm w-36 bg-light-red rounded flex justify-center items-center gap-1 relative"
            onClick={() => {
              navigate(-1);
            }}
          >
            GO BACK
          </button>
        </div>
      </Page>
    );
  }
  return (
    <Page title={`blog?=${word.substring(0, 7)}...`}>
      <div className={`grid lg:grid-cols-2 gap-10`}>
        {search.map((item, index) => {
          return (
            <BlogCard2
              {...item}
              key={item.id + "-blog-listing"}
              index={index}
            />
          );
        })}
      </div>
    </Page>
  );
};

export default BlogSearch;
