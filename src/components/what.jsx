// What.jsx
import React from "react";

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
        padding: "10px 20px",
        backgroundColor: "#25D366",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Enviar Mensaje por WhatsApp
    </button>
  );
};

export default WhatsAppContact;