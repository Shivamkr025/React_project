import './App.css'
import Banner from './Components/Banner/Banner'
import BlogPost from './Components/BlogPost/BlogPost'
import Consult from './Components/Consult/Consult'
import ConsultMain from './Components/ConsultMain/ConsultMain'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import OurClient from './Components/OurClient/OurClient'
import OurTeam from './Components/Team/OurTeam'


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Consult/>
      <ConsultMain/>
      <OurTeam/>
      <OurClient/>
      <BlogPost/>
      <Footer/>
    </>
  )
}

export default App
