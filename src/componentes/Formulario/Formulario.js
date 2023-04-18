import './Formulario.css';
import CampoGrupo from "./../CampoTexto/CampoTexto";
import CampoLista from './../CampoLista/CampoLista.js';
// import CampoLista from "./../CampoLista/CampoLista";

function Formulario() {
    return (
        <div className="formulario">
            <form>
                <h1 className="formulario-titulo">Rellena el formulario para crear el colaborador.</h1>
                <CampoGrupo tipo="Nombre" />
                <CampoGrupo tipo="Puesto" />
                <CampoGrupo tipo="Foto" />
                <CampoLista />
            </form>
        </div>
    );
}

export default Formulario;