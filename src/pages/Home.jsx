import React from 'react'
import Swal from 'sweetalert2';

const Home = ({ alumnos, actualizar }) => {
  const cambiar = (ruta) => {
    window.location = ruta;
  }

  const eliminar = async (id) => {

    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`https://api-rutas-alumnos.onrender.com/alumnos/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(res=>{
          Swal.fire(
            'Eliminado!',
            'El alumno fue eliminado.',
            'success'
          )
          actualizar();
        })
      }
    })



  }



  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column'>
      <h1>Lista de Alumnos</h1>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Semeste</th>
            <th>Ver</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => {
            return (
              <tr key={index}>
                <th scope='row'>{alumno.matricula}</th>
                <td>{alumno.nombre}</td>
                <td>{alumno.carrera}</td>
                <td>{alumno.semestre}</td>
                <td><button onClick={() => cambiar(`/alumno/${alumno.matricula}`)} className='btn btn-success'><i className="bi bi-gear-fill "></i></button></td>
                <td><button onClick={() => cambiar(`/alumno/editar/${alumno.matricula}`)} className='btn btn-warning'><i className="bi bi-pencil-fill"></i></button></td>
                <td><button onClick={() => eliminar(alumno.matricula)} className='btn btn-danger'><i className="bi bi-trash2-fill"></i></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home