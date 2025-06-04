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
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-screen-2xl mx-auto">
        <Router>
          <ScrollToTop />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kids-piano" element={<KidsPiano />} />
            <Route
              path="/Introductory-piano-course"
              element={<IntroductoryPianoCourse />}
            />
            <Route
              path="/piano-theory-course"
              element={<PianoTheoryProgram />}
            />
            <Route
              path="/songwriting-class"
              element={<SongwritingLessonsPage />}
            />
            <Route path="/about-me" element={<AboutMePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
