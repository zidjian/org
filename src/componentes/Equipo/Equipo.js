import "./Equipo.css";
import Colaborador from "./../Colaborador/Colaborador";

function Equipo(props) {
    const { titulo, colorPrimario, colorSecundario, id } = props.equipo;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;
    return (
        colaboradores.length > 0 && (
            <section
                className="equipo"
                style={{ backgroundColor: colorSecundario }}
            >
                <input
                    type="color"
                    className="equipo-color"
                    value={colorPrimario}
                    onChange={evento => {
                        actualizarColor(evento.target.value, id);
                    }}
                />
                <div className="seccion-contenedor">
                    <h3
                        className="seccion-titulo"
                        style={{ borderColor: colorPrimario }}
                    >
                        {titulo}
                    </h3>
                    <div className="colaboradores">
                        {colaboradores.map((colaborador, indice) => {
                            return (
                                <Colaborador
                                    colaborador={colaborador}
                                    color={colorPrimario}
                                    key={indice}
                                    eliminarColaborador={eliminarColaborador}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        )
    );
}

export default Equipo;
