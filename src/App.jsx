import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import KidsPiano from "./pages/KidsPiano";
import Home from "./pages/Home";
import IntroductoryPianoCourse from "./pages/IntroductoryPianoCourse";
import PianoTheoryProgram from "./pages/PianoTheoryProgram";
import SongwritingLessonsPage from "./pages/SongwritingLessonsPage";
import AboutMePage from "./pages/AboutMePage";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FacebookPixel from "./components/FacebookPixel";
import WorkshopsPage from "./pages/WorkshopsPage";
import Navbar from "./components/Navbar";
import PianoBasicsWorkshop from "./pages/workshops/PIanoBasicsWorkshop";

function App() {
  const ScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 200);
        }
      }
    }, [location]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <FacebookPixel />

      {/* ✅ Add the Navbar before Routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids-piano" element={<KidsPiano />} />
        <Route
          path="/Introductory-piano-course"
          element={<IntroductoryPianoCourse />}
        />
        <Route path="/piano-theory-course" element={<PianoTheoryProgram />} />
        <Route path="/songwriting-class" element={<SongwritingLessonsPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route
          path="/workshops/piano-basics-workshop"
          element={<PianoBasicsWorkshop />}
        />
      </Routes>
    </Router>
  );
}

export default App;
