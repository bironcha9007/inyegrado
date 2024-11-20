import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Footer from '../components/Footer';

const ServiciosDetails = () => {
    const servicio = useLoaderData();



    return (
        <>
            <div className="program-details">
                <h1>{servicio.servicio}</h1>
                <h3>{servicio.title}</h3>
                <p>{servicio.info}</p>
                {servicio.linkURL ? (
    <button
        style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            marginTop: '20px',
        }}
        onClick={() => window.open(servicio.linkURL, '_blank')}
    >
        Ir al Sitio Web
    </button>
) : (
    <p>No hay URL disponible</p>
)}
             
                <h1 style={{ marginTop: '40px' }}>Tramites</h1>
                <div className="details">
                    <div className="detail">
                        
                        <p><b>Expected Duration</b>: {servicio.duration}</p>
                        <p style={{ marginTop: '15px' }}>{servicio.details}</p>
                        <h3 style={{ marginTop: '15px' }}>Curriculum</h3>
                        <p>{servicio.curriculum}</p>
                    </div>
                    <img src={servicio.imageURL} alt={servicio.servicio} /> 
                </div>
                

                <p style={{ marginTop: '20px' }}>
                    Note that meeting these requirements does not guarantee acceptance into the servicio.
                </p>

               
            </div>
            
            <Footer />
        </>
    );
};

export default ServiciosDetails;

export const serviciosDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`${process.env.REACT_APP_API_URL}/serviciosIE/${id}`);
    if (!res.ok) {
        throw Error("Could not find that servicio");
    }
    return res.json();
};
