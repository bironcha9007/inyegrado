import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Redes = () => {
  const openWhatsApp = () => {
    const phoneNumber = "3012491404"; // Número de WhatsApp
    const message = "Deseo comunicarme con ustedes"; // Mensaje predefinido
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <div className="icons" style={{ padding:"10px", marginRight:"5px",display: "flex", alignItems:"center", justifyContent: "flex-end",gap: "15px" }}>
      <a
        href="https://www.facebook.com/share/18GcPSwrr4/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1877F2", fontSize: "25px" }}
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.youtube.com/results?search_query=integrado+de+soacha"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#FF0000", fontSize: "25px" }}
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.instagram.com/explore/locations/286456354/institucion-educativa-integrado-de-soacha/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#E4405F", fontSize: "25px" }}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.tiktok.com/discover/integrado-de-soacha"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#000000", fontSize: "25px" }}
      >
        <FaTiktok />
      </a>
      <button
        onClick={openWhatsApp}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#25D366",
          fontSize: "25px",
        }}
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default Redes;
