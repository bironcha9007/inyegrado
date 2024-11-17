import React from 'react';

// rrd import
import { useLoaderData, Link } from 'react-router-dom';

// component import
import Footer from '../components/Footer';

const Plataforma = () => {
    const plataforma = useLoaderData();

  return (
    
    <div className='course-programs'>
        <div className='pro'>
        {plataforma.map(program => (
            <div key={program.id} className="pro-link">
                <Link to={program.id.toString()} key={program.id}>
                    <p>{program.program}</p>
                    <p><b>Acceso</b>: {program.certification}</p>
                </Link>
            </div>
        ))}
        </div>
        <Footer />
    </div>
  )
}

export default Plataforma

// loader function
export const programsLoaders = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/undergraduatePrograms`);
    if (!res.ok) {
        throw Error("Could not fetch programs");
    }
    return res.json();
}

