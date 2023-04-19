import './Formulario.css';
import CampoGrupo from "./../CampoTexto/CampoTexto";
import CampoLista from "./../CampoLista/CampoLista";
import Boton from "./../Boton/Boton";

function Formulario() {

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('hola');
    };

    return (
        <div className="formulario">
            <form onSubmit={manejarEnvio}>
                <h1 className="formulario-titulo">Rellena el formulario para crear el colaborador.</h1>
                <CampoGrupo tipo="Nombre" required />
                <CampoGrupo tipo="Puesto" required />
                <CampoGrupo tipo="Foto" required />
                <CampoLista tipo="equipo" required />
                <Boton />
            </form>
        </div>
    );
}

export default Formulario;