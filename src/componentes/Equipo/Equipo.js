import "./Equipo.css";
import Colaborador from "./../Colaborador/Colaborador";

function Equipo(props) {
    const { titulo, colorPrimario, colorSecundario } = props.equipo;
    const { colaboradores } = props;
    return (
        colaboradores.length > 0 && (
            <section
                className="equipo"
                style={{ backgroundColor: colorSecundario }}
            >
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
