import { whySchool } from "../constants";
import { Link } from "react-router-dom";

const WhySchool = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="content">
      <div className="reasons">
        {whySchool.map((reason) => (
          <Link
            key={reason.id} // Aquí colocamos el key correctamente
            onClick={scrollToTop}
            to={reason.link}
          >
            <div className="reason">
              <div className="icon">{reason.icon}</div>
              
              <img src={reason.image} alt={reason.title} /><h2>{reason.title}</h2>
              <p>{reason.reason}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhySchool;
