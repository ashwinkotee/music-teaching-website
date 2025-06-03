import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import KidsPiano from './pages/KidsPiano';
import Home from './pages/Home';
import IntroductoryPianoCourse from './pages/IntroductoryPianoCourse';
import PianoTheoryProgram from './pages/PianoTheoryProgram';
import SongwritingLessonsPage from './pages/SongwritingLessonsPage';
import AboutMePage from './pages/AboutMePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids-piano" element={<KidsPiano />} />
        <Route path="/Introductory-piano-course" element={<IntroductoryPianoCourse />} />
        <Route path="/piano-theory-course" element={<PianoTheoryProgram />} />
        <Route path="/songwriting-class" element={<SongwritingLessonsPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </Router>
  )
}

export default App
