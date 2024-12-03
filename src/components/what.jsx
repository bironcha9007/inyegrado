// What.jsx
import React from "react";
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppContact = () => {
  const phoneNumber = "3012491404"; // Número de WhatsApp
  const message = "Deseo comunicarme con ustedes"; // Mensaje predefinido

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <button
      onClick={openWhatsApp}
      style={{
        padding: "0px 0px",
        backgroundColor: "transparent",
        color: "#25D366",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "25px",
      }}
    >
      <FaWhatsapp/>
    </button> 
  );
};

export default WhatsAppContact;