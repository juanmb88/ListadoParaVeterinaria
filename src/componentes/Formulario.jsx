/*htmlFor toma el ID del INPUT y hace que el usuario al dar click ingrese al for y con TAB se maneje adentor de este por si no puede usar el mouse*/
import React from 'react';
import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({setPacientes, pacientes, pacienteEditado, setpacienteEditado}) => {
//states de cada input
  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error, setError] =useState(false);
//escucha el boton editar
  useEffect(() => {
//Object.keys = forma de comprobar si un objeto tiene algo
    if(Object.keys(pacienteEditado).length > 0){
//setNombre=valor inicila de formulario | pacienteEditado.nombre es el que esta en memoria al cual le doy click en EDITAR
      setNombre(pacienteEditado.nombre)
      setPropietario(pacienteEditado.propietario)
      setEmail(pacienteEditado.email)
      setFecha(pacienteEditado.fecha)
      setSintomas(pacienteEditado.sintomas)

    }
  
  }, [pacienteEditado])


//Generar ID ALEATORIO con el metodo Date() y Math()
const generarId = ()=>{
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha
}
//console.log(generarId)



//envio de formulario
  const handleSubmit = (e)=>{
    e.preventDefault();

//Validacion del formulario//,uso estado de error, para campos obligatorios
  if([nombre,propietario,email,fecha,sintomas].includes("")){
      setError(true)
      return;
    }
      setError(false);
//Objeto de Paciente de la funcion setPaciente que va al var pacientes- 
//objeto en memoria de lo que leemos en el formulario
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }
//Creo un if para comprobar si existe en el  objeto paciente un id
//pacienteEditado es el objetro q estamos pasando
      if(pacienteEditado.id){
        //editando el registro SI TENGO ID, el ID lo tiene paciente Editado no objetoPaciente
        objetoPaciente.id = pacienteEditado.id//asigno ID al nuevo objeto
        const pacienteActulizados = pacientes.map(pacienteState => 
         pacienteState.id === pacienteEditado.id ? objetoPaciente : pacienteState )
         //identificar que registro estamos editando por ID, iterando en el state de Pacientes
         // 
            setPacientes(pacienteActulizados)
            setpacienteEditado({})

      }else{
        //nuevo registro nuevo objeto creado 
        objetoPaciente.id =  generarId()//genero 1ero el ID
        //copia del state y agregando objeto nuevo al setPacientes
        setPacientes([...pacientes,objetoPaciente]);

      }
      
//Reinicio de formulario al agreagar paciente
//para cuando el usuario de en agregar paciente se blanquee el formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
  }


  return (
    <div className=' md:1/2 lg:w-2/5 mt-5 mx-5'>

      <h3 className='font-black text-center text-3xl'>Seguimiento Pacientes</h3>
        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {" "}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-20 border-4 border-emerald-400' 
            onSubmit={handleSubmit}>
          <div className='my-5' >
            <label  htmlFor='mascota' className='block text-gray-600 uppercase font-bold'>
              Nombre Mascota
            </label>

            <input type="text"
                  id='mascota' 
                  placeholder='Nombre de la mascota'
                  className='border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg'
                  value={nombre}
                  onChange={(e)=>setNombre(e.target.value)}/>
          </div>

          <div className='my-5'>
            <label  htmlFor='propietario' className='block text-gray-600 uppercase font-bold' >
              Nombre Propietario
            </label>

            <input type="text"
                  id='propietario' 
                  placeholder='Nombre de Propietario'
                  className='border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg'
                  value={propietario}
                  onChange={(e)=>setPropietario(e.target.value)}/>
          </div>

          <div className='my-5'>
            <label  htmlFor='email' 
                    className='block text-gray-600 uppercase font-bold'>
              Email
            </label>

            <input type="email"
                  id='email' 
                  placeholder='email'
                  className='border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className='my-5'>
            <label  htmlFor='alta' 
                    className='block text-gray-600 uppercase font-bold'>
              Alta
            </label>

            <input type="date"
                  id='alta' 
                  className='border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg'
                  value={fecha}
                  onChange={(e)=>setFecha(e.target.value)}/>
          </div>

          <div className='my-5'>
            <label  htmlFor='alta' 
                    className='block text-gray-600 uppercase font-bold'>
              Sintomas
            </label>
            <textarea className='border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-lg' 
                      id="sintomas" 
                      cols="30" 
                      rows="10" 
                      placeholder='Describe los sintomas'
                      value={sintomas}
                      onChange={(e)=>setSintomas(e.target.value)}></textarea>
          </div>

          {error && <Error>Todos los campos son obligatorios</Error>}

          <input type="submit" 
                 className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md' 
                 value={pacienteEditado.id ? 'Editar Paciente' : 'Agregar Paciente'} />
      </form>


    </div>
  )
}

export default Formulario