import React from "react";
import Page from "../components/Page";
import { IconFacebook, IconInstagram, IconLinkedin } from "../utils/icons";
const Contact2 = () => {
  return (
    <Page title={"contact us"}>
      <div className="grid md:grid-cols-3 gap-10">
        <form action="#" className="md:my-20 mt-20 md:col-span-2">
          <h2 className="text-5xl capitalize  mb-5">Say hello..!</h2>
          <p className="text-gray ">
            Fill up this form to reach our stunning Streamit team and click on
            send message.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
            <input
              type="text"
              className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
              required
              placeholder="Your Name*"
            />
            <input
              type="text"
              className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
              required
              placeholder="Last Name*"
            />
            <input
              type="text"
              className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
              required
              placeholder="Phone Number*"
            />
            <input
              type="text"
              className="h-14 w-full bg-black border-none  text-gray outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-4 block"
              required
              placeholder="Your Email*"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="sm:col-span-2 text-gray w-full min-h-[8rem] sm:h-14 bg-black p-4 resize-none"
              placeholder="Your Message*"
            ></textarea>
          </div>
          <button className="w-40 h-12 font-roboto mt-10 text-sm rounded-sm bg-light-red">
            SEND MESSAGE
          </button>
        </form>
        <div className="md:col-span-1 flex flex-col md:my-20">
          <div className="py-10 border-b-1 border-gray">
            <p className="text-2xl mb-3">Come See US</p>
            <p className="text-gray">
              Townhouse Agency Consoling. LLC 50 ean 2 See, 41A Xo Tabriz Tb
              20159
            </p>
          </div>
          <div className="py-10 border-b-1 border-gray">
            <p className="text-2xl mb-3">Get In Touch</p>
            <p className="text-light-red mb-1">support@meitiflix.com</p>
            <p className="text-gray">0413-288-88-88</p>
          </div>
          <div className="py-10 ">
            <p className="text-2xl mb-3">Follow Us</p>
            <div className="flex items-center gap-4">
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
      </div>
    </Page>
  );
};

export default Contact2;
