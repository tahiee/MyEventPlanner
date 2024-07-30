import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import LandingPage from './Components/LandingPage'
import { CreateEvent } from './Components/CreateEvent'


function App() {
  

  return (
    <>  <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='LandingPage' element={<LandingPage/>}/>
          <Route path='CreateEvent' element={<CreateEvent/>}/>        
        </Routes>
       
       
    </>
    );
}

export default App;
