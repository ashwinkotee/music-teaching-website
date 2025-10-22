import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import IntroductoryPianoCourse from "./pages/IntroductoryPianoCourse";
import PianoTheoryProgram from "./pages/PianoTheoryProgram";
import SongwritingLessonsPage from "./pages/SongwritingLessonsPage";
import AboutMePage from "./pages/AboutMePage";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MetaPixel from "./components/MetaPixel";
import WorkshopsPage from "./pages/WorkshopsPage";
import Navbar from "./components/Navbar";
import PianoBasicsWorkshop from "./pages/workshops/PIanoBasicsWorkshop";
import Aug8and9 from "./pages/workshops/Aug8and9";

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
      <MetaPixel />

      {/* ✅ Add the Navbar before Routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/workshops/Aug8and9" element={<Aug8and9 />} />
      </Routes>
    </Router>
  );
}

export default App;
