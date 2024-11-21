import React from 'react';
import { FaLocationArrow, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="address">
       <h2>Datos Contacto :</h2>
        <div className="add">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <p>Cra. 20A #12-61 <br />Soacha,Cundinamarca, Colombia</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaPhone />
          </div>
          <p>7814243 <br />5773202</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaLocationArrow />
          </div>
          <p>I.E.integrado@hotmail.com</p>
        </div>
    </div>
  )
}

export default ContactAddress
