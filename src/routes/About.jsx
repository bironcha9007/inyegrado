//components
import AboutInfo from "../components/AboutInfo";
import AboutParts from "../components/AboutParts";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";
import Redes from "../components/redes";
const About = () => {
  return (
    <>
    <div className="col fourth-col">

<Redes />
</div>
      <div className="pages">
        <h2 className="title">Conoce Nuestro Colegio</h2>
      </div>
      <AboutParts />
     <AboutInfo />
      
      <MissionVision />
      <Footer />
    </>
  )
}

export default About