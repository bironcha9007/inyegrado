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
import Contact from "./routes/Contact";
import UndergraduatePrograms, { programsLoader } from "./routes/UndergraduatePrograms";
import Servicios, { serviciosLoader } from "./routes/Servicios";
import ProgramDetails, { programDetailsLoader } from "./routes/ProgramDetails";
import ServiciosDetails, { serviciosDetailsLoader } from "./routes/ServiciosDetails";
import Plataforma from "./routes/Plataforma";


// Layout import
import RootLayout from "./layouts/RootLayout";
import ProgramLayout from "./layouts/ProgramLayout";
import PlataformaLayout from "./layouts/PlataformaLayout";
import ServiciosLayout from "./layouts/ServiciosLayout";

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
        path="plataforma"
        element={<PlataformaLayout />}
        errorElement={<ProgramError />}
      >
        <Route index element={<Plataforma />} />
        <Route path=":id" element={<ProgramDetails />} loader={programDetailsLoader} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="apply" element={<Admission />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
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
