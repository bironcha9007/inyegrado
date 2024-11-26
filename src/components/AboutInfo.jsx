import image6 from "../assets/horizonte.jpg";

const AboutInfo = () => {
  return (
    <div className="about-info">
      <div className="vc-office">
        <h1>
          Horizonte Institucional
         
        </h1>
        <p>
          La Institución Educativa (IE) es un Establecimiento de carácter
          oficial y de tipo urbano, localizada en la comuna 2 (zona central del
          municipio de Soacha). Tiene operación en tres (3) sedes urbanas: sede
          A - Integrado y Sede B – John F. Kennedy (Barrio Eugenio Díaz Castro)
          y sede C - Danubio (Barrio el Danubio). Ofrece sus servicios en los
          niveles de preescolar, básica y media, y con respecto a esta última
          cuenta con la modalidad de bachillerato académico en articulación con
          el SENA.
        </p>
      </div>
      <div className="vc-image">
        <img src={image6} alt="vc-img" />
      </div>
    </div>
  );
};

export default AboutInfo;
