import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import Banner from './Components/Banner'

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar />
      <div className='max-w-screen-sm mx-auto'>
      <Banner />
      </div>
      <Footer />
    </div>
  )
}

export default App
