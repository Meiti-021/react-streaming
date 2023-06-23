import CastChart from "../components/CastChart";
import HomeHero from "../components/HomeHero";
import MovieChart from "../components/MovieChart";
import ShowHero from "../components/ShowHero";
import TopMovies from "../components/TopMovies";
import TopSeries from "../components/TopSeries";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
import { shuffle } from "../utils/utils";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TopMovies />
      <MovieChart title={"only on Stream"} />
      <ShowHero />
      <CastChart />
      <MovieChart
        title="Popular This Week"
        list={shuffle([...movies, ...shows]).slice(0, 10)}
      />
      <TopSeries />
      <MovieChart
        title="Recommended For You"
        list={shuffle([...movies, ...shows]).slice(0, 10)}
      />
      <MovieChart
        title="Topiks For You"
        list={shuffle([...movies, ...shows]).slice(0, 10)}
      />
    </div>
  );
};

export default Home;
