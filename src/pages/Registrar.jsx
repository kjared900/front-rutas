import React, { useState } from 'react';
import Alumno from './Alumno';


const Registrar = () => {
  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');


  const carreras = [
    'Ingeniería Civil',
    'Ingeniería Industrial',
    'Ingeniería en Sistemas Computacionales',
    'Ingeniería en Mecatrónica',
    'Licenciatura en Administración',
    'Ingeniería Química',
    'Ingeniería en Logística',
    'Ingeniería Eléctrica',
    'Ingeniería en TICS'
  ];


  const agregarAlumno = (obj) => {
    // console.log(JSON.stringify(obj));
    fetch(`https://api-rutas-alumnos.onrender.com/alumnos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => {
      window.location = "/";
    });

  }


  const guardar = (e) => {
    e.preventDefault();
    const alumno = {
      matricula: matricula,
      nombre: nombre.toUpperCase(),
      carrera: carrera,
      semestre: semestre
    };
    agregarAlumno(alumno);
  };


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center col-12">
      <h1>Ingresar un nuevo alumno</h1>
      <form className='col-9 card p-4' onSubmit={guardar}>
        <div className="mb-3">
          <label for="matricula" className="form-label">Matricula</label>
          <input value={matricula} onChange={e => setMatricula(e.target.value)} required type="number" className="form-control" id="matricula" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="nombre" className="form-label">Nombre</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} required type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label for="Carrera" className="form-label">Carrera</label>
          <select
            onChange={(e) => setCarrera(e.target.value)}
            required
            className="form-control"
            id="carrera"
            value={carrera}
          >
            <option value="">Seleccionar Carrera</option>
            {carreras.map((carrera, index) => (
              <option key={index} value={carrera}>
                {carrera}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label for="semestre" className="form-label">Semestre</label>
          <input value={semestre} onChange={e => setSemestre(e.target.value)} required type="number" className="form-control" id="semestre" />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
};

export default Registrar;
