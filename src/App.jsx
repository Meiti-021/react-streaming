import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ScrollToTop from "./components/ScrollToTop";
import Series from "./pages/Series";
import Login from "./pages/Login";
import Registery from "./pages/Registery";
import AboutUs from "./pages/AboutUs";
import Contact1 from "./pages/Contact1";
function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/series/:id" element={<Series />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registery" element={<Registery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
