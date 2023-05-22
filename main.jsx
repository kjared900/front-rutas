// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Registrar from './pages/Registrar.jsx';
import Navi from './pages/components/Navi.jsx';
import Alumno from './pages/Alumno.jsx';
import EditarAlumno from './pages/EditarAlumno.jsx';

const App = () => {
  const [data, setData] = useState([]);

  const actualizar = async () => {
    const jsonData = await fetch(`https://api-rutas-alumnos.onrender.com/alumnos`);
    const datos = await jsonData.json();
    setData(datos);
  }
  useEffect(() => {
    actualizar();
  }, [])
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route exact path="/" element={<Home alumnos={data} actualizar = {actualizar} />} />
        <Route
          path="/registrar"
          element={<Registrar />}
        />
        <Route path="/alumno/:id" element={<Alumno  />} />
        <Route
          path="/alumno/editar/:id"
          element={<EditarAlumno alumnos={data} setAlumnos={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
