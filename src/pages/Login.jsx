import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
const Login = () => {
  return (
    <div className="fixed p-5 bg-center top-0 w-full h-screen flex justify-center items-center bg-[url(/assets/others/banner.webp)] z-50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full flex flex-col gap-5 max-w-lg bg-[rgba(0,0,0,0.8)] backdrop-blur-sm px-9 py-20"
      >
        <img src={logo} alt="" className="w-44 mx-auto" />
        <div className="flex flex-col gap-4">
          <p className="font-medium">Username or Email Address</p>
          <input
            type="text"
            className="bg-darker-gray h-12 w-full border-none outline-none focus:border-none p-2"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium">Password</p>
          <input
            type="password"
            className="bg-darker-gray h-12 w-full border-none outline-none focus:border-none p-2"
          />
        </div>
        <p className="text-light-red italic text-right">Forgot Password?</p>
        <div className="flex gap-3">
          <input type="checkbox" name="" id="cookie" />
          <label htmlFor="cookie" className="text-sm">
            Remember Me
          </label>
        </div>
        <button className="h-12 rounded-md flex justify-center items-center bg-light-red text-white">
          LOG IN
        </button>
        <p className="text-center">
          New to Meitiflix?{" "}
          <Link to="/registery" className="text-light-red">
            Register
          </Link>
        </p>
        <div className="h-[0.2rem] my-5 w-full relative flex justify-center items-center bg-dark-gray">
          <p className="absolute bg-[rgba(0,0,0,0.01)]  p-3">OR</p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link>
            <img
              src="/assets/others/google.webp"
              alt=""
              className="w-12 h-12 object-contain block"
            />
          </Link>
          <Link>
            <img
              src="/assets/others/facebook.webp"
              alt=""
              className="w-12 h-12 object-contain block"
            />
          </Link>
          <Link>
            <img
              src="/assets/others/linkedin.webp"
              alt=""
              className="w-12 h-12 object-contain block"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
