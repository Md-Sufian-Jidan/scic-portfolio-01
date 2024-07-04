import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import Banner from './Components/Banner'
import About from './Components/About'

function App() {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <Navbar />
      <div className='max-w-screen-md mx-auto space-y-10'>
        <Banner />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App
