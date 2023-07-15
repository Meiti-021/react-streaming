import BlogCard2 from "../components/BlogCard2";
import Page from "../components/Page";
import { blogs } from "../services/blog";
import { useParams } from "react-router-dom";
const BlogGrid = () => {
  const { column } = useParams();
  if (column.split("-")[1] == 1) {
    return (
      <Page title="blog">
        <div className={`grid lg:grid-cols-1 gap-10`}>
          {blogs.map((item, index) => {
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
  }
  if (column.split("-")[1] == 2) {
    return (
      <Page title="blog">
        <div className={`grid lg:grid-cols-2 gap-10`}>
          {blogs.map((item, index) => {
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
  }
  return (
    <Page title="blog">
      <div className={`grid lg:grid-cols-3 gap-10`}>
        {blogs.map((item, index) => {
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

export default BlogGrid;
