import "./App.css";
import About from "./component/About";
import Choice from "./component/Choice";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import ParentMain from "./component/ParentMain";
import ParentMain2 from "./component/ParentMain2";
import ParentMain3 from "./component/ParentMain3";
import ParentMain4 from "./component/ParentMain4";

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
      <Route path="resume2" element={<ParentMain2/>}></Route>
      <Route path="resume3" element={<ParentMain3/>}></Route>
      <Route path="resume4" element={<ParentMain4/>}></Route>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
