import './App.css'
import Footer from './footer'
import Contacts from './contacts'
import LandingPage from './landing-page'
import Herosection from './herosection'
import About from './about'
import Projects from './projects'
import Ribbon from './ribbon'
import Collumns from './collumns'
import Lpmobile from './landingpagemobile'
import PDFViewer from './roadmap'


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
      <Projects/>
      <br /><br /><br /><br /><br />
      <Ribbon/>
      <br />
      <Contacts/>
      <Footer/>
      <Collumns/>
      <Lpmobile/>
    </>
  )
}

export default App
