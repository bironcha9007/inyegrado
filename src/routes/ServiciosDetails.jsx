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


                <h1 style={{ marginTop: '40px' }}>Información y Contacto</h1>
                <div className="details">
                    <div className="detail1">

                        <p>{servicio.duration}</p>
                        <p >{servicio.details}</p>
                        <p>{servicio.curriculum}</p>
                    </div>
                    <div className="detail">
                        <img src={servicio.imageURL} alt={servicio.servicio} />
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
                                Acceder
                            </button>
                        ) : (
                            <p>No hay URL disponible</p>
                        )}
                    </div>
                </div>
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
