import Hero from "./components/Hero"
import News from './components/News'
import Welovecoffee from './components/Welovecoffee'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCarousel from "./components/ImageCarousel";
import Menu1 from './components/Menu1'
import Menu2 from './components/Menu2'
import Menu3 from './components/Menu3'

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ImageCarousel />
            <Menu1 />
            <Menu2 />
            <Menu3 />
            <News />
            <Welovecoffee />
         <Footer />
          </>
        } />
       


      </Routes>
    </Router>
    </>
  )
}

export default App
