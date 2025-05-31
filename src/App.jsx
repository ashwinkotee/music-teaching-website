import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import PackagesSection from './components/PackageSection';
import SongWritingSection from './components/SongWrittingSection';
import FeaturedWork from './components/FeaturedWork';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
      <InfoSection/>
      <PackagesSection/>
      <SongWritingSection/>
      <FeaturedWork/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
