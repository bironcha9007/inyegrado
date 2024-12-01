import React from 'react';

const GSLRAccess = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>PLATAFORMA GSLR</h2>
      <a href="https://gssoftwareysoluciones.com/2024/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://gssoftwareysoluciones.com/images/LOGO-GS-V18.png"
          alt="Plataforma GSLR"
          style={styles.image}
        />
      </a>
      <p style={styles.info}>
        <strong>Acceso Digitalizado para la Comunidad Educativa:</strong><br />
        La plataforma GSLR es una herramienta integral que conecta a estudiantes, docentes y padres con información académica actualizada.
      </p>
      <p style={styles.details}>
        <strong>Horarios de Atención:</strong><br />
        Lunes a viernes de 7:00am a 5:00pm<br />
        Sábados de 7:00am a 12:00 del medio día.
      </p>
      <p style={styles.details}>
        Nuestra asesoría garantiza a nuestros clientes eficiencia y transparencia, soporte inmediato y en línea. Chatea con nosotros o deja tu mensaje.
      </p>
      <p style={styles.contact}>
        <strong>Contáctenos:</strong><br />
        Dirección: Cra 9 No.6-26 B. Triana Flandes - Tolima<br />
        Celular: 3054116497 | 3125875618 | 3142711344<br />
        Correos: <a href="mailto:notasoporte@gmail.com">notasoporte@gmail.com</a>, <a href="mailto:soportenota@gmail.com">soportenota@gmail.com</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  info: {
    fontSize: '14px',
    margin: '16px 0',
    color: '#333',
  },
  details: {
    fontSize: '14px',
    margin: '8px 0',
    color: '#555',
  },
  contact: {
    fontSize: '12px',
    marginTop: '12px',
    color: '#555',
    textAlign: 'left',
  },
};

export default GSLRAccess;
