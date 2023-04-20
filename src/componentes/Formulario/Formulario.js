import "./Formulario.css";
import hexToRgba from "hex-to-rgba";
import {v4 as uuidv4} from 'uuid';
import CampoGrupo from "./../CampoTexto/CampoTexto";
import CampoLista from "./../CampoLista/CampoLista";
import Boton from "./../Boton/Boton";
import { useState } from "react";

function Formulario(props) {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");


    const { registrarColaborador, registrarEquipo } = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            id: uuidv4(),
            nombre,
            puesto,
            foto,
            equipo,
        };
        setNombre('');
        setPuesto('');
        setFoto('');
        setEquipo('');
        registrarColaborador(datosAEnviar);
    };

    const manejarEnvioEquipo = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            id: uuidv4(),
            titulo,
            colorPrimario: color,
            colorSecundario: hexToRgba(color, .4)
        };
        setTitulo('');
        setColor('');
        registrarEquipo(datosAEnviar)
    };

    return (
        <div className="formulario">
            <div className="formulario-contenido seccion-contenedor">
                <form onSubmit={manejarEnvio}>
                    <h1 className="formulario-titulo">
                        Rellena el formulario para crear el colaborador.
                    </h1>
                    <CampoGrupo
                        tipo="Nombre"
                        required
                        valor={nombre}
                        setValor={setNombre}
                    />
                    <CampoGrupo
                        tipo="Puesto"
                        required
                        valor={puesto}
                        setValor={setPuesto}
                    />
                    <CampoGrupo
                        tipo="Foto"
                        required
                        valor={foto}
                        setValor={setFoto}
                    />
                    <CampoLista
                        tipo="equipo"
                        required
                        valor={equipo}
                        setValor={setEquipo}
                        equipos={props.equipos}
                    />
                    <Boton />
                </form>
                <form onSubmit={manejarEnvioEquipo}>
                    <h1 className="formulario-titulo">
                        Rellena el formulario para crear el equipos.
                    </h1>
                    <CampoGrupo
                        tipo="Titutlo"
                        required
                        valor={titulo}
                        setValor={setTitulo}
                    />
                    <CampoGrupo
                        tipo="Color"
                        required
                        valor={color}
                        setValor={setColor}
                    />
                    <Boton />
                </form>
            </div>
        </div>
    );
}

export default Formulario;
