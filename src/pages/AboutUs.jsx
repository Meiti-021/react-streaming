import Page from "../components/Page";
import {
  BlackWolf,
  CinemaProduction,
  FilmDirector,
  GlassesMovie,
  Play,
} from "../utils/icons";
const team = [
  {
    job: "CEO",
    name: "Tonny Smith",
  },
  {
    job: "designer",
    name: "Barry Tech",
  },
  {
    job: "developer",
    name: "Mahdi Dehgani",
  },
  {
    job: "designer",
    name: "Monty Rock",
  },
];
const AboutUs = () => {
  return (
    <>
      <Page title="about us" className={"bg-black"}>
        <h1 className="text-3xl sm:text-5xl text-center mt-20">
          Masterminds Team
        </h1>
        <p className="text-center max-w-xl mt-5 mb-16 text-gray mx-auto">
          Your Streamit is build by one of the best and well experienced web
          developers and an awarded Envato Elite Author.
        </p>
        <div className="grid sm:grid-cols-2 mdp:grid-cols-4 gap-7">
          {team.map((item, index) => {
            return (
              <article className="" key={"team-" + index + 1}>
                <figure className="h-96 overflow-hidden">
                  <img
                    src={`/assets/others/team-${index + 1}.png`}
                    alt=""
                    className="w-full h-full object-cover hover:w-[120%] hover:h-[120%] transition-all duration-700 origin-center"
                  />
                </figure>
                <div className="flex flex-col gap-4 py-5">
                  <p className="text-lg border-l-3 w-fit pl-1 border-light-red bg-gradient-to-r from-dark-red to-black italic ">
                    {item.job}
                  </p>
                  <p className="text-3xl">{item.name}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Page>
      <div className="bg-dark-gray p-5 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="w-full  md:h-screen">
            <img
              src="/assets/others/map.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col w-full h-full justify-center  gap-5">
            <h2 className="text-3xl sm:text-5xl capitalize ">
              Contact Us Here
            </h2>
            <p className="text-gray mb-5">
              Meitiflix is located in Tabriz city and you can contact us at{" "}
              <span className="text-light-red"> DEV.MEITI@GAMIL.COM </span> for
              any tech-related support and assistance. We love to hear from our
              Streamit users.
            </p>
            <div className="grid grid-cols-3">
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-4xl sm:text-5xl text-center text-light-red w-full font-roboto-slab">
                  4
                </p>
                <p className="text-xl w-full text-center">Branch</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-4xl sm:text-5xl text-center text-light-red w-full font-roboto-slab">
                  400
                </p>
                <p className="text-xl w-full text-center">Employee</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-4xl sm:text-5xl text-center text-light-red w-full font-roboto-slab">
                  1,000
                </p>
                <p className="text-xl w-full text-center">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-10 py-10">
        <h2 className="text-3xl sm:text-5xl text-center my-10">
          Work With the Best
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 max-w-7xl mx-auto">
          <CinemaProduction />
          <BlackWolf />
          <GlassesMovie />
          <FilmDirector />
          <Play />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
