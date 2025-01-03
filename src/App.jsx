import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importar estilos

import ProgramError from "./components/ProgramError";
import Error from "./components/Error";

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Facility from "./routes/Facility";
import Admission from "./routes/Admission";
import Educacion from "./routes/Educacion";
import Contact from "./routes/Contact";
import UndergraduatePrograms, { programsLoader } from "./routes/UndergraduatePrograms";
import Departamentos, { departamentoLoader } from "./routes/Departamentos";
import Servicios, { serviciosLoader } from "./routes/Servicios";
import ProgramDetails, { programDetailsLoader } from "./routes/ProgramDetails";
import ServiciosDetails, { serviciosDetailsLoader } from "./routes/ServiciosDetails";
import DepartamentoDetails, { departamentoDetailsLoader } from "./routes/DepartamentoDetails";
import Plataforma from "./routes/Plataforma";

// Layout import
import RootLayout from "./layouts/RootLayout";
import ProgramLayout from "./layouts/ProgramLayout";
import PlataformaLayout from "./layouts/PlataformaLayout";
import ServiciosLayout from "./layouts/ServiciosLayout";
import DepartamentoLayout from "./layouts/DepartamentoLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="facility" element={<Facility />} />
      <Route
        path="servicios"
        element={<ServiciosLayout />}
        errorElement={<ProgramError />}
      >
        <Route index element={<Servicios />} loader={serviciosLoader} />
        <Route path=":id" element={<ServiciosDetails />} loader={serviciosDetailsLoader} />
      </Route>
      <Route
        path="programs"
        element={<ProgramLayout />}
        errorElement={<ProgramError />}
      >
        <Route index element={<UndergraduatePrograms />} loader={programsLoader} />
        <Route path=":id" element={<ProgramDetails />} loader={programDetailsLoader} />
      </Route>
      <Route
        path="departamentos"
        element={<DepartamentoLayout />}
        errorElement={<ProgramError />}
      >
        <Route index element={<Departamentos />} loader={departamentoLoader} />
        <Route path=":id" element={<DepartamentoDetails />} loader={departamentoDetailsLoader} />
      </Route>
      <Route
        path="plataforma"
        element={<PlataformaLayout />}
        errorElement={<ProgramError />}
      >
        <Route index element={<Plataforma />} />
        <Route path=":id" element={<ProgramDetails />} loader={programDetailsLoader} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="apply" element={<Admission />} />
      <Route path="educacion" element={<Educacion />} />
      <Route path="*" element={<Error />} />
    </Route>
  ),
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Agregar la bandera para evitar la advertencia
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_startTransition:true,
      v7_relativeSplatPath: true,



    },
  }
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
