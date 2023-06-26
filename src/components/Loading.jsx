import Lottie from "lottie-react";
import load from "../utils/loading.json";
const Loading = () => {
  return (
    <div
      className={`w-screen bg-black p-50 z-[60] h-screen fixed top-0 left-0  justify-center items-center flex`}
    >
      <div className="h-96">
        <Lottie animationData={load} />
      </div>
    </div>
  );
};

export default Loading;
