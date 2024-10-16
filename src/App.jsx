import React from 'react'
import MainSection from './components/mainSection/mainSection'
import Sidebar from './components/sideBar/Sidebar'
import AboutMe from './components/aboutMe/AboutMe'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import './App.css'

const App = () => {
  return (
    <div>
      <div className='main-section__sidebar-section'>
        <Sidebar />
        <MainSection />
      </div>
      <AboutMe />
      <Services />
      <Experience />
    </div>
  )
}

export default App
