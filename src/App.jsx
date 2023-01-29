import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import ListadoPacientes from "./componentes/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {

    const [ pacientes, setPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [ pacienteEditado, setpacienteEditado ] = useState({});
    
    
    //localStorge para persistencia de la info 
    useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes])
    
    
    //evento de eliminar
        const eliminarPaciente = id => {
          const pacientesActualizados = pacientes.filter(pacienteEditado => pacienteEditado.id !== id);
           setPacientes(pacientesActualizados)
        }


    return (
      <div className = "container mx-auto mt-10" >

        <Header/>

        <div className = "mt'12 md:flex" >
          <Formulario
                    pacientes = { pacientes }
                    setPacientes = { setPacientes }
                    pacienteEditado = { pacienteEditado } 
                    setpacienteEditado = { setpacienteEditado } />
        
          <ListadoPacientes
                    pacientes ={ pacientes }
                    setpacienteEditado = { setpacienteEditado } 
                    eliminarPaciente = {eliminarPaciente}  />
        </div>

    </div>
  )
}

export default App;
