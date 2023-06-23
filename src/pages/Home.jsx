import HomeHero from "../components/HomeHero";
import MovieChart from "../components/MovieChart";
import TopMovies from "../components/TopMovies";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TopMovies />
      <MovieChart title={"only on Stream"} />
    </div>
  );
};

export default Home;
