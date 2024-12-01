import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <div className="pages contact">
        <h1 className="title">Contactanos</h1>
      </div>
      <h1 className="titles">Encuentranos en:</h1>
      <div className="map">
        
        <iframe title='cont'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.206193634322!2d-74.23973947763446!3d4.584769372484667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f757dce02f4c3%3A0x24967c5c23700d5e!2sInstituci%C3%B3n%20Educativa%20Integrado%20de%20Soacha!5e0!3m2!1ses!2sco!4v1731690220116!5m2!1ses!2sco" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Contact
 