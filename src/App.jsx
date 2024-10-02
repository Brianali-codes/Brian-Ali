import './App.css'
import Footer from './footer'
import Contacts from './contacts'
import LandingPage from './landing-page'
import Herosection from './herosection'
import About from './about'
import Projects from './projects'
import Ribbon from './ribbon'
import Lpmobile from './landingpagemobile'
import PDFViewer from './roadmap'
import Progress from './progress'


function App() {

  return (
    <>
      <LandingPage/>
      <Herosection/>
      <hr />
      <br />
      <About/>
      <br/>
      <hr />
      <br /><br /><br /><br /><br />
      <PDFViewer/>
      <br /><br />
      <Projects/>
      <br /><br /><br /><br />
      <Progress/>
      <br />
      <Contacts/>
      <Footer/>
      <Lpmobile/>
      <Ribbon/>
    </>
  )
}

export default App
