import React from 'react'
import Nevbar from './component/Nevbar'
import Hero from './component/Hero'
import About from './component/About'
import Contact from './component/Contact'


const App = () => {
  return (
    <>
    {/* Nev bar is there is above rute but data will lode in rutes */}
      <Nevbar/>
      {/* Hair u have to give specific rute to each page thats imp */}
      <Routes>
        <Route path='/' element={ <Hero/> } />
        <Route path='/about' element={<About/>  } />
        <Route path='/contact' element={ <Contact/> } />
        {/* <Route path='/product' element={<Product/>} /> */}
        
      </Routes>
    </>
  )
}

export default App