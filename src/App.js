import "./App.css";
import hexToRgba from "hex-to-rgba";
import {v4 as uuidv4} from 'uuid';
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Section from "./componentes/Section/Section";
import Equipo from "./componentes/Equipo/Equipo.js";
import Footer from "./componentes/Footer/Footer.js";
import { useState } from "react";

function App() {
    const [toggle, mostrarFormulario] = useState(true);
    const [colaboradores, setColaboradores] = useState([
        {
            id: uuidv4(),
            nombre: 'Waldir Maidana',
            puesto: 'Desarrallador web',
            foto: 'https://www.github.com/zidjian.png',
            equipo: 'Front End',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Harland Lora',
            puesto: 'Instructor',
            foto: 'https://github.com/harlandlohora.png',
            equipo: 'Front End',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Geneys',
            puesto: 'Instructor',
            foto: 'https://github.com/genesysaluralatam.png',
            equipo: 'Devops',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Jean Marie',
            puesto: 'Instructor',
            foto: 'https://github.com/JeanmarieAluraLatam.png',
            equipo: 'Móvil',
            fav: false
        }
    ]);
    const [equipos, setEquipos] = useState([
        {
            id: uuidv4(),
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9",
        },
        {
            id: uuidv4(),
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF",
        },
        {
            id: uuidv4(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2",
        },
        {
            id: uuidv4(),
            titulo: "Devops",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8",
        },
        {
            id: uuidv4(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5",
        },
        {
            id: uuidv4(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9",
        },
        {
            id: uuidv4(),
            titulo: "Innovación y  Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF",
        },
        {
            id: uuidv4(),
            titulo: "Estudiante",
            colorPrimario: "rgb(156, 79, 232)",
            colorSecundario: "rgba(156, 79, 232, 0.4)F",
        },
    ]);

    // Mostrar y no el formulario
    const toogleFormulario = () => {
        mostrarFormulario(!toggle);
    };

    // Eliminar Colaborador
    function eliminarColaborador(id) {
        const colaboradores_actualizados = colaboradores.filter(colaborador => colaborador.id !== id);
        setColaboradores(colaboradores_actualizados);
    }

    // Actualizar color
    function actualizarColor(color, id) {
        const equipos_actualizados = equipos.map(equipo => {
            if(id === equipo.id) {
                equipo.colorPrimario = color;
                equipo.colorSecundario = hexToRgba(color, .4);
            }
            return equipo;
        })
        setEquipos(equipos_actualizados);
    }

    // Actualizar Equipos
    function registrarEquipo(equipo) {
        setEquipos([...equipos, equipo]);
    }

    const registrarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    // Favorito

    function favorito(id) {
        const colaboradores_actualizados = colaboradores.map(colaborador => {
            if(id === colaborador.id) {
                colaborador.fav = !colaborador.fav;
            }
            return colaborador;
        })
        setColaboradores(colaboradores_actualizados);
    }

    return (
        <div className="App">
            <Header />
            {toggle && (
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    registrarEquipo={registrarEquipo}
                />
            )}
            <Section toggleFormulario={toogleFormulario} />
            {equipos.map((equipo, indice) => {
                return (
                    <Equipo
                        equipo={equipo}
                        colaboradores={colaboradores.filter(
                            (colaborador) =>
                                colaborador.equipo === equipo.titulo
                        )}
                        key={indice}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        favorito={favorito}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
