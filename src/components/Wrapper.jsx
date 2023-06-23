import { Children } from "react";

const Wrapper = () => {
  return (
    <section className="p-10">
      <div className="max-w-screen-2xl mx-auto">{Children}</div>
    </section>
  );
};

export default Wrapper;
