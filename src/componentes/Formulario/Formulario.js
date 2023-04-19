import './Formulario.css';
import CampoGrupo from "./../CampoTexto/CampoTexto";
import CampoLista from "./../CampoLista/CampoLista";
import Boton from "./../Boton/Boton";
import { useState } from 'react';

function Formulario(props) {
    const [nombre, setNombre]  = useState('');
    const [puesto, setPuesto]  = useState('');
    const [foto, setFoto]  = useState('');
    const [equipo, setEquipo]  = useState('');

    const {registrarColaborador} = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrarColaborador(datosAEnviar);
    };

    return (
        <div className="formulario">
            <form onSubmit={manejarEnvio}>
                <h1 className="formulario-titulo">Rellena el formulario para crear el colaborador.</h1>
                <CampoGrupo tipo="Nombre" required valor={nombre} setValor={setNombre} />
                <CampoGrupo tipo="Puesto" required valor={puesto} setValor={setPuesto} />
                <CampoGrupo tipo="Foto" required valor={foto} setValor={setFoto} />
                <CampoLista tipo="equipo" required valor={equipo} setValor={setEquipo} equipos={props.equipos} />
                <Boton />
            </form>
        </div>
    );
}

export default Formulario;