import { useNavigate } from "react-router-dom";

const Error2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-5 h-screen fixed z-50 flex flex-col gap-14 justify-center items-center bg-black">
      <img
        src="/assets/others/bg-min.webp"
        alt=""
        className=" block absolute w-full h-full object-cover"
      />
      <img
        src="/assets/others/404min.png"
        alt=""
        className="relative z-[51] mdp:left-52 block  w-96 h-auto object-contain"
      />
      <div className="relative mdp:left-52">
        <div className="absolute h-[1px] w-full bg-gradient-to-r top-0 from-black via-light-red to-black"></div>
        <p className="relative text-center z-[51] text-3xl font-semibold p-5">
          ohhh no..! you lost in imagination.
        </p>
        <div className="absolute h-[1px] w-full bg-gradient-to-r bottom-0 from-black via-light-red to-black"></div>
      </div>
      <p className="-mt-5 text-center relative mdp:left-52">
        we are sorry, but the page you are looking for doesn’t exist.
      </p>
      <button
        className="h-10 text-sm w-36 bg-light-red mdp:left-52 rounded flex justify-center items-center gap-1 relative"
        onClick={() => {
          navigate("/");
        }}
      >
        GO HOME
      </button>
    </div>
  );
};

export default Error2;
