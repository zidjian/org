import "./Campo.css";

function CampoTexto(props) {
    function actualizarValor(e) {
        props.setValor(e.target.value);
    }
    let {tipo= 'text'} = props;

    const tipo_campo = `CampoGrupo-input${tipo}`;

    const placeholder = `Escribe aqui el ${props.nombre.toLowerCase()}...`;
    return (
        <div className="CampoGrupo">
            <label className="CampoGrupo-label">{props.nombre}</label>
            <input
                type={tipo}
                className={tipo_campo}
                placeholder={placeholder}
                required={props.required}
                value={props.valor}
                onChange={actualizarValor}
            />
        </div>
    );
}

export default CampoTexto;
