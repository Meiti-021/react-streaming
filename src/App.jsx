import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ScrollToTop from "./components/ScrollToTop";
import Series from "./pages/Series";
import Login from "./pages/Login";
import Registery from "./pages/Registery";
import AboutUs from "./pages/AboutUs";
import Contact1 from "./pages/Contact1";
import Contact2 from "./pages/Contact2";
import FAQ from "./pages/FAQ";
import Policy from "./pages/Policy";
import Movie from "./pages/Movie";
import Movie2 from "./pages/Movie2";
import Movie3 from "./pages/Movie3";
import Error from "./pages/Error";
import Error2 from "./pages/Error2";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import BlogGrid from "./pages/BlogGrid";
import BlogSideBar from "./pages/BlogSideBar";
import BlogPagination from "./pages/BlogPagination";
import BlogLoadMore from "./pages/BlogLoadMore";
import BlogInfiniteScroll from "./pages/BlogInfiniteScroll";
import { SnackbarProvider } from "notistack";
import Cast from "./pages/Cast";
function App() {
  return (
    <div className="font-roboto">
      <SnackbarProvider />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error2" element={<Error2 />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog-infinite-scroll"
            element={<BlogInfiniteScroll />}
          />
          <Route path="/blog-load-more" element={<BlogLoadMore />} />
          <Route path="/blog-pagination" element={<BlogPagination />} />
          <Route path="/blog-right-sidebar" element={<Blog />} />
          <Route path="/blog-left-sidebar" element={<BlogSideBar />} />
          <Route path="/blog-grid/:column" element={<BlogGrid />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/cast/:id" element={<Cast />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/load-more" element={<Movie2 />} />
          <Route path="/movies/infinite" element={<Movie3 />} />
          <Route path="/series/:id" element={<Series />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registery" element={<Registery />} />
          <Route path="/pmp-pricing-plan" element={<Registery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
