import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Prototype from './components/Prototype'
import Screenshots from './components/Screenshots'
import Features from './components/Features'
import ScoreTable from './components/ScoreTable'
import Vision from './components/Vision'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Prototype />
      <HowItWorks />
      <Screenshots />
      <Features />
      <ScoreTable />
      <Vision />
      <Waitlist />
      <Footer />
    </>
  )
}

export default App
