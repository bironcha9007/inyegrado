// rrd import
import { NavLink } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";

const Home = () => {
    return ( 
        <>
            <div className="home">
                <p className="title">INSTITUCIÓN EDUCATIVA INTEGRADO DE SOACHA</p>
                <p className="info">Innovamos para transformar el futuro, aprendemos con tecnología.</p>
                <NavLink to='/about'>Conocenos</NavLink>
            </div>
            <MissionVision />
            <WhySchool />
            <Testimonials />
            <Footer />
        </>
    );
}
 
export default Home;