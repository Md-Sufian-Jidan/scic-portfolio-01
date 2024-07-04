import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import Banner from './Components/Banner'
import About from './Components/About'
import Skills from './Components/Skills'

function App() {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <Navbar />
      <div className='max-w-screen-md mx-auto'>
        <Banner />
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default App
