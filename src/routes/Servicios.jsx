import React from 'react';

// rrd import
import { useLoaderData, Link } from 'react-router-dom';

// component import
import Footer from '../components/Footer';

const Servicios = () => {
    const servicios = useLoaderData();

  return (
    <div className='course-programs'>
        <div className='pro'>
        {servicios.map(servicio => (
            <div key={servicio.id} className="pro-link">
                <Link to={servicio.id.toString()} key={servicio.id}>
                    <p>{servicio.servicio}</p>
                    
                </Link>
            </div>
        ))}
        </div>
        <Footer />
    </div>
  )
}

export default Servicios

// loader function
export const serviciosLoader = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/serviciosIE`);
    if (!res.ok) {
        throw Error("Could not fetch programs");
    }
    return res.json();
}

