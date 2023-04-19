import "./CampoTexto.css";

function CampoTexto(props) {
    const placeholder = `Escribe aqui el ${props.tipo.toLowerCase()}...`;
    return (
        <div className="CampoGrupo">
            <label className="CampoGrupo-label">{props.tipo}</label>
            <input
                type="text"
                className="CampoGrupo-input"
                placeholder={placeholder}
                required={props.required}
            />
        </div>
    );
}

export default CampoTexto;
