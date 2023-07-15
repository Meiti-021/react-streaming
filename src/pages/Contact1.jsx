import Page from "../components/Page";
import { IconMail, IconPhone, IconPin } from "../utils/icons";
const info = [
  {
    icon: <IconPin className="h-16 w-16" />,
    title: "Address",
    info: "Tabriz/Iran",
  },
  {
    icon: <IconPhone className="h-16 w-16" />,
    title: "Anytime Call",
    info: "0413-288-88-88",
  },
  {
    icon: <IconMail className="h-16 w-16" />,
    title: "Email Us",
    info: "support@meitiflix.com",
  },
];
const Contact1 = () => {
  return (
    <Page title="Contact">
      <div className="py-20 grid sm:grid-cols-3 gap-10 sm:gap-5 relative">
        {info.map((item) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-1"
              key={item.info}
            >
              <div className="">{item.icon}</div>
              <p className="text-light-red text-center text-3xl pt-5 capitalize">
                {item.title}
              </p>
              <p className="text-gray">{item.info}</p>
            </div>
          );
        })}
        <div className="absolute w-full h-[.05rem] bottom-0 bg-gradient-to-r from-dark-gray via-gray to-dark-gray"></div>
      </div>
      <form action="#" className="my-20">
        <h2 className="text-5xl capitalize text-center mb-5">Say hello..!</h2>
        <p className="text-gray text-center">
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
    </Page>
  );
};

export default Contact1;
