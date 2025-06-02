import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import KidsPiano from './pages/KidsPiano';
import GroupClass from './pages/GroupClass';
import PayAsYouGo from './pages/PayAsYouGo';
import SongwritingClass from './pages/SongwritingClass';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids-piano" element={<KidsPiano />} />
        <Route path="/group-class" element={<GroupClass />} />
        <Route path="/pay-as-you-go" element={<PayAsYouGo />} />
        <Route path="/songwriting-class" element={<SongwritingClass />} />
      </Routes>
    </Router>
  )
}

export default App
