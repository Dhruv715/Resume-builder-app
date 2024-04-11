import "./App.css";
import About from "./component/About";
import Choice from "./component/Choice";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import ParentMain from "./component/ParentMain";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="about" element={<About />}></Route>
      {/* here four Route add In Future Two Template 1.freshers -->With Photo & Without Photo 2.Experience -->with Photo and Without Photo  */}
      {/* At This Time Only one Component and Resume Format Suppperted */}
      <Route path="resumemaker" element={<Choice/>}></Route>
      <Route path="resume1" element={<ParentMain/>}></Route>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
