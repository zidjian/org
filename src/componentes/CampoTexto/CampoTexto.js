import "./CampoTexto.css";

function CampoTexto(props) {
    function actualizarValor(e) {
        props.setValor(e.target.value);
    }
    const placeholder = `Escribe aqui el ${props.tipo.toLowerCase()}...`;
    return (
        <div className="CampoGrupo">
            <label className="CampoGrupo-label">{props.tipo}</label>
            <input
                type="text"
                className="CampoGrupo-input"
                placeholder={placeholder}
                required={props.required}
                value={props.valor}
                onChange={actualizarValor}
            />
        </div>
    );
}

export default CampoTexto;
