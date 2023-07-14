import { useState } from "react";
import Page from "../components/Page";
import { IconPlus, MinusIcon } from "../utils/icons";
const faqs = [
  "What is streamit?",
  "Will my account work outside my country?",
  "I am facing video playback issues. What do I do?",
  "How can I manage notifications?",
  "What benefits do I get with the packs?",
];

const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-black min-h-min transition-all duration-700 rounded-sm">
      <div className="w-full h-24 p-4 flex items-center justify-between">
        <p className="text-2xl">{item}</p>
        <button
          className="w-10 h-10 bg-light-red flex justify-center items-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {" "}
          {open ? <MinusIcon /> : <IconPlus />}{" "}
        </button>
      </div>
      {open ? (
        <div className="w-full h-auto p-4">
          <p className=" text-gray">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English.
          </p>
        </div>
      ) : undefined}
    </div>
  );
};

const FAQ = () => {
  return (
    <Page title="FAQS">
      <div className="min-h-screen">
        <div className="grid gap-5 max-w-4xl mx-auto ">
          {faqs.map((item) => {
            return <FaqItem item={item} key={item} />;
          })}
        </div>
      </div>
    </Page>
  );
};

export default FAQ;
