import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
