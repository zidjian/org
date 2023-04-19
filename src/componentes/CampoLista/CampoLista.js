import "./CampoLista.css";

function CampoLista(props) {
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión",
    ];
    return (
        <div className="CampoGrupo">
            <label className="CampoGrupo-label">Equipo</label>
            <select
                className="CampoGrupo-select"
                defaultValue={""}
                required={props.required}
            >
                <option
                    value=""
                    disabled
                    hidden
                    className="CampoGrupo-noselecionado"
                >
                    Seleccione un {props.tipo}
                </option>
                {equipos.map((equipo, indice) => {
                    return <option key={indice}>{equipo}</option>;
                })}
            </select>
        </div>
    );
}

export default CampoLista;
