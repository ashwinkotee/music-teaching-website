import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import KidsPiano from './pages/KidsPiano';
import GroupClass from './pages/GroupClass';
import PayAsYouGo from './pages/PianoTheoryProgram';
import SongwritingClass from './pages/SongwritingLessonsPage';
import Home from './pages/Home';
import IntroductoryPianoCourse from './pages/IntroductoryPianoCourse';
import PianoTheoryProgram from './pages/PianoTheoryProgram';
import SongwritingLessonsPage from './pages/SongwritingLessonsPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids-piano" element={<KidsPiano />} />
        <Route path="/Introductory-piano-course" element={<IntroductoryPianoCourse />} />
        <Route path="/piano-theory-course" element={<PianoTheoryProgram />} />
        <Route path="/songwriting-class" element={<SongwritingLessonsPage />} />
      </Routes>
    </Router>
  )
}

export default App
