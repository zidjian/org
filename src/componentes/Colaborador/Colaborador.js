import './Colaborador.css';

function Colaborador(props) {
    const {nombre, puesto, foto} = props.colaborador;
    const {color} = props;
    const b_color = `linear-gradient(0deg, #FFFFFF 70%, ${color} 70%)`;
    
    return (
        <div className='colaborador' style={{background: b_color}}>
            <div className='colaborador-encabezado'>
                <img src={foto} alt="Foto de colaborador" className='colaborador-imagen' />
            </div>
            <div className='colaborador-info'>
                <h3 className='colaborador-nombre'>{nombre}</h3>
                <p className='colaborador-puesto'>{puesto}</p>
            </div>
        </div>
    );
}

export default Colaborador;