import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-5 h-screen fixed z-50 flex flex-col gap-14 justify-center items-center">
      <img
        src="/assets/others/bg-dark.webp"
        alt=""
        className="block absolute w-full h-full object-cover"
      />
      <img
        src="/assets/others/404.webp"
        alt=""
        className="relative z-[51] block  w-1/3 h-auto object-contain"
      />
      <div className="relative">
        <div className="absolute h-[1px] w-full bg-gradient-to-r top-0 from-black via-light-red to-black"></div>
        <p className="relative text-center z-[51] text-3xl font-semibold p-5">
          Oops! something went wrong
        </p>
        <div className="absolute h-[1px] w-full bg-gradient-to-r bottom-0 from-black via-light-red to-black"></div>
      </div>
      <p className="-mt-5 text-center relative">
        We’re sorry, it looks like the page you’re looking for isn’t in our
        system.
      </p>
      <button
        className="h-10 text-sm w-36 bg-light-red rounded flex justify-center items-center gap-1 relative"
        onClick={() => {
          navigate(-1);
        }}
      >
        GO BACK
      </button>
    </div>
  );
};

export default Error;
