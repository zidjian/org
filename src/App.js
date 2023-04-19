import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Section from "./componentes/Section/Section";
import { useState } from "react";

function App() {
    const [toggle, mostrarFormulario] = useState(true);
    const toogleFormulario = () => {
        mostrarFormulario(!toggle);
    };

    return (
        <div className="App">
            <Header />
            { toggle && <Formulario />}
            <Section toggleFormulario={toogleFormulario} />
        </div>
    );
}

export default App;
