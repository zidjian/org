import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Section from "./componentes/Section/Section";
import Equipo from "./componentes/Equipo/Equipo.js";
import Footer from "./componentes/Footer/Footer.js";
import { useState } from "react";

function App() {
    const [toggle, mostrarFormulario] = useState(true);
    const [colaboradores, setColaboradores] = useState([]);

    const toogleFormulario = () => {
        mostrarFormulario(!toggle);
    };

    const equipos = [
        {
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9",
        },
        {
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF",
        },
        {
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2",
        },
        {
            titulo: "Devops",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8",
        },
        {
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5",
        },
        {
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9",
        },
        {
            titulo: "Innovación y  Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF",
        },
    ];

    const registrarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    return (
        <div className="App">
            <Header />
            {toggle && (
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                />
            )}
            <Section toggleFormulario={toogleFormulario} />
            {equipos.map((equipo, indice) => {
                return (
                    <Equipo
                        equipo={equipo}
                        colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
                        key={indice}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
