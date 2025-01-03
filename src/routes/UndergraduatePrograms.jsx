import React from 'react';
import FacilityList from '../components/FacilityList';
// rrd import
import { useLoaderData, Link } from 'react-router-dom';

// component import
import Footer from '../components/Footer';

const UndergraduatePrograms = () => {
    const programs = useLoaderData();


  return (

    <div className='course-programs'>
   
        <div className='pro'>
        {programs.map(program => (
            <div key={program.id} className="pro-link">
                <Link to={program.id.toString()} key={program.id}>
                    <p>{program.program}</p>
                   
                </Link>
            </div>
        ))}
        </div>
        <FacilityList />
       
        <Footer />
    </div>
  )
}

export default UndergraduatePrograms

// loader function
export const programsLoader = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/undergraduatePrograms`);
    if (!res.ok) {
        throw Error("Hay problemas");
    }
    return res.json();
}


