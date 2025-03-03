import './App.css'
import Banner from './components/banner'
import Project from './components/project/project'
import Sidenav from './components/sidenav'
import Work from './components/work/work'
import Resume from './components/resume/resume'
import Contact from './components/contact/contact'

function App() {
  return (
    <>
     <Sidenav />
     <Banner  />
     <Work />
     <Project />
     <Resume />
     <Contact />
    </>
  )
}

export default App
