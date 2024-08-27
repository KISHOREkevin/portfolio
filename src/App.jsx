import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Credit from './components/Credit'
import Intrests from './components/Intrests'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='h-[100vh] scroll-smooth bg-background  overflow-y-scroll bg-ctp-base text-ctp-blue'>
      <Navbar />
     <About/>
      <Skills />
      <Project />
      <Credit />
      <Intrests/>
      <Contact />
    </div>
  )
}

export default App
