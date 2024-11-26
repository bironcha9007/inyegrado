//components
import AboutInfo from "../components/AboutInfo";
import AboutParts from "../components/AboutParts";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="pages">
        <h2 className="title">IE Integrado Soacha</h2>
      </div>
      <AboutParts />
     <AboutInfo />
      
      <MissionVision />
      <Footer />
    </>
  )
}

export default About