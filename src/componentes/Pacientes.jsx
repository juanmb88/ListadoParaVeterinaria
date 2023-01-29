const Pacientes = ( { paciente, setpacienteEditado,eliminarPaciente } ) => {
  
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;
    //funcion de eliminar
    const handleEliminar = ()=>{
      const respuesta = confirm('¿Seguro deseas eliminar este paciente?')
      if(respuesta){
        eliminarPaciente(id)
      }
    }
   

return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl border-4 solid border-blue-700' >
          <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre : {" "}
            <span className='font-normal normal-case'> { nombre } </span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario : {" "}
            <span className='font-normal normal-case'> { propietario } </span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'> Email : {" "}
            <span className='font-normal normal-case'> { email } </span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta : {" "}
            <span className='font-normal normal-case'> { fecha } </span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas : {" "}
            <span className='font-normal normal-case'> { sintomas } </span>
          </p>
       
          <div className="flex justify-between pt-8 " > 
            <button type="button" 
                    className="py-2 px-5 bg-indigo-500 hover:bg-indigo-700 font-bold text-white uppercase rounded-md"
                    onClick = {() => setpacienteEditado ( paciente ) } >
                Editar
            </button>
            <button type="button" 
                    className="py-2 px-5 bg-red-500 hover:bg-red-700 font-bold text-white uppercase rounded-md" 
                    onClick={handleEliminar}>
                Eliminar
            </button>

          </div>

     </div>
  )
}

export default Pacientes;