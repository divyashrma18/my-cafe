import Hero from "./components/Hero"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCarousel from "./ImageCarousel";

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ImageCarousel />
          </>
        } />
       


      </Routes>
    </Router>
    </>
  )
}

export default App
