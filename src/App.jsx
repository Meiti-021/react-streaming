import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
