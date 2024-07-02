import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import Banner from './Components/Banner'
import About from './Components/About'

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar />
      <div className='max-w-screen-sm mx-auto'>
      <Banner />
      <About />
      </div>
      <Footer />
    </div>
  )
}

export default App
