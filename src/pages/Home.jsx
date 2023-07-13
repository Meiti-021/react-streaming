import { useSelector } from "react-redux";
import CastChart from "../components/CastChart";
import HomeHero from "../components/HomeHero";
import MovieChart from "../components/MovieChart";
import ShowHero from "../components/ShowHero";
import TopGenres from "../components/TopGenres";
import TopMovies from "../components/TopMovies";
import TopSeries from "../components/TopSeries";
import { shuffle } from "../utils/utils";

const Home = () => {
  const { movies, shows } = useSelector((store) => store.movieData);
  return (
    <div>
      <HomeHero />
      <TopMovies />
      <MovieChart title={"only on Stream"} list={movies} />
      <ShowHero />
      <CastChart />
      <MovieChart
        title="Popular This Week"
        list={[...shows, ...movies].slice(0, 10)}
      />
      <TopSeries />
      <MovieChart
        title="Recommended For You"
        list={[...movies, ...shows].slice(0, 10)}
      />
      <TopGenres />
      <MovieChart
        title="Topiks For You"
        list={[...shows, ...movies].slice(0, 10)}
      />
    </div>
  );
};

export default Home;
