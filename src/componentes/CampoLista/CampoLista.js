import "./CampoLista.css";

function CampoLista(props) {
    function actualizarValor(e) {
        props.setValor(e.target.value);
    }
    return (
        <div className="CampoGrupo">
            <label className="CampoGrupo-label">Equipo</label>
            <select
                className="CampoGrupo-select"
                defaultValue={""}
                required={props.required}
                valor={props.valor}
                onChange={actualizarValor}
            >
                <option
                    value=""
                    disabled
                    hidden
                >
                    Seleccione un {props.tipo}
                </option>
                {props.equipos.map((equipo, indice) => {
                    return <option key={indice}>{equipo}</option>;
                })}
            </select>
        </div>
    );
}

export default CampoLista;
