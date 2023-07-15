import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const LoadingPage = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [pathname]);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 h-screen flex justify-center items-center z-[100] w-full bg-black">
      <h1 className="text-7xl">LOADING</h1>
    </div>
  );
};
export default LoadingPage;
