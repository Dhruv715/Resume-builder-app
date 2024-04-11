import "./App.css";
import About from "./component/About";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import ParentMain from "./component/ParentMain";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="resumemaker" element={<ParentMain/>}></Route>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
