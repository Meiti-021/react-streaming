import HomeHero from "../components/HomeHero";
import MovieChart from "../components/MovieChart";
import ShowHero from "../components/ShowHero";
import TopMovies from "../components/TopMovies";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TopMovies />
      <MovieChart title={"only on Stream"} />
      <ShowHero />
    </div>
  );
};

export default Home;
