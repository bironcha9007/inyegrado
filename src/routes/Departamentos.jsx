import React from 'react';
import DepartamentosList from '../components/DepartamentosList';
// rrd import
import { useLoaderData, Link } from 'react-router-dom';

// component import
import Footer from '../components/Footer';

const Departamentos = () => {

    const departamentos = useLoaderData();

  return (
    <div className='course-programs'>

        <div className='pro'>
        {departamentos.map(departamento => (
            <div key={departamento.id} className="pro-link">
                <Link to={departamento.id.toString()} key={departamento.id}>
                    <p>{departamento.departamento}</p>
                   
                </Link>
            </div>
        ))}
        </div>
        <DepartamentosList />
        <Footer />
    </div>
  )
}

export default Departamentos

// loader function
export const departamentoLoader = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/departamentosIE`);
    if (!res.ok) {
        throw Error("Hay problemas con tu conexión");
    }
    return res.json();
}

