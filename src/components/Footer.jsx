import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import apple from "../assets/apple.webp";
import google from "../assets/google-play.webp";
import { IconFacebook, IconInstagram, IconLinkedin } from "../utils/icons";
const Footer = () => {
  return (
    <div className="bg-black px-10 py-24 text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid xl:grid-cols-8  gap-x-14 gap-y-16 grid-cols-1 sm:grid-cols-4">
          <div className="flex flex-col sm:col-span-2  xl:col-span-2 gap-10">
            <img src={logo} alt="" className="w-32" />
            <ul className="flex flex-col gap-5">
              <li>EmailUs: meiti.edu@gmail.com</li>
              <li>Costumer Service</li>
              <li className="text-2xl font-bold">+(480)555-0103</li>
            </ul>
          </div>
          <div className="flex flex-col sm:col-span-2 xl:col-span-1 gap-10">
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="flex flex-col gap-5 text-gray ">
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">About Us</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Blog</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Pricing Plan</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:col-span-2 xl:col-span-1 gap-10">
            <p className="text-lg font-semibold">Movies</p>
            <ul className="flex flex-col gap-5 text-gray ">
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Top Trendings</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Recommended</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Popular</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:col-span-2 xl:col-span-1 gap-10">
            <p className="text-lg font-semibold">About </p>
            <ul className="flex flex-col gap-5 text-gray ">
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Contact Us</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="text-sm hover:text-light-red transition-all duration-500">
                <Link to="/">Terms Of Use</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  sm:col-span-2 xl:col-span-3 gap-10">
            <p className="text-lg font-semibold">Subscribe To Newsletter</p>
            <div className="flex bg-dark-gray h-12">
              <input
                type="email"
                className="bg-semi-dark-gray border-none p-4 h-full w-9/12 text-white focus:border-none focus:outline-none"
                placeholder="Email"
              />
              <button className="h-full min-w-min p-3 w-3/12 bg-light-red text-white rounded-sm">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm">Follow Us :</p>
              <a href="/">
                <IconFacebook className={"w-4 h-4"} />
              </a>
              <a href="/">
                <IconInstagram className={"w-4 h-4"} />
              </a>

              <a href="/">
                <IconLinkedin className={"w-4 h-4"} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-1 text-gray border-gray grid text-sm grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-16 mt-28 pt-16">
          <div className="col-span-2 flex flex-col gap-6">
            <ul className="flex gap-4">
              <li className="hover:underline">
                <Link>terms Of Use</Link>
              </li>
              <li className="hover:underline">
                <Link>Privacy-Policy</Link>
              </li>
              <li className="hover:underline">
                <Link>Blog</Link>
              </li>
              <li className="hover:underline">
                <Link>FAQ</Link>
              </li>
              <li className="hover:underline">
                <Link>Whatchlist</Link>
              </li>
            </ul>
            <p>
              © 2023 <span className="text-light-red">MEITIFLIX</span>. All
              Rights Reserved. All videos and shows on this platform are
              trademarks of, and all related images and content are the property
              of, Streamit Inc. Duplication and copy of this is strictly
              prohibited.
            </p>
          </div>
          <div className="col-span-2  xl:col-span-1 flex flex-col gap-6">
            <p className="text-lg text-center">Download MEITIFLIX apps</p>
            <div className="flex justify-center">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
