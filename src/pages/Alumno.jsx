import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


const Alumno = () => {
  const {id} = useParams();
  const [alumno,setAlumno]= useState(null);
  useEffect(()=>{
    (async()=>{
      const jsonData = await fetch(`https://api-rutas-alumnos.onrender.com/alumnos/${id}`);
      const datos = await jsonData.json();
      setAlumno(datos)
    })()
  },[])
  return (
    <div className='col-12 text-center'>
      {alumno?(
        <>
        
        <i class="bi bi-person-circle" style={{'fontSize':'200px'}}></i>
        <h1>{alumno.nombre}</h1>
        <h2>{alumno.carrera}</h2>
        <h3>Matricula: {alumno.matricula} Semestre: {alumno.semestre}°</h3>
        </>
      ):null}
    </div>
  )
}

export default Alumno