import Pacientes from "./Pacientes";
import {useEffect} from 'react';

const ListadoPacientes = ({pacientes, setpacienteEditado,eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0 )
    console.log('nuevo paciente')

  
  }, [pacientes])

  return (
  <div className='w1/2 lg:w-3/5 mt-5 md:h-screen h-screen overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center '>ListadoPacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center '>Administra tus{" "}
                  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>
      
          {pacientes && pacientes.length ? ( <> 

            { pacientes.map( paciente => ( 
               < Pacientes  key = {paciente.id}
                            paciente = {paciente} 
                            setpacienteEditado = {setpacienteEditado}
                            eliminarPaciente ={eliminarPaciente} /> ) )} </>
                                      
          ) : ( <>

          <h2 className='font-black text-3xl text-center '>No hay pacientes</h2>
                  <p className='text-xl mt-5 mb-10 text-center '>Comienza agregando pacientes{" "}
                        <span className='text-indigo-600 font-bold'>y apareceran aqui</span>
                  </p>
        
                  { pacientes.map( (paciente) => (  < Pacientes  paciente = {paciente}  
                                                                 key = {paciente.id} 
                                                    /> 
                                                ))}  
                 </> ) }   

  </div>
  )
}

export default ListadoPacientes;