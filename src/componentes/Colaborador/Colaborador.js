import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Colaborador(props) {
    const {nombre, puesto, foto, id, fav} = props.colaborador;
    const {color, eliminarColaborador, favorito} = props;
    const b_color = `linear-gradient(0deg, #FFFFFF 70%, ${color} 70%)`;

    return (
        <div className='colaborador' style={{background: b_color}}>
            <AiFillCloseCircle className='colaborador-eliminar' onClick={() => eliminarColaborador(id)} />
            <div className='colaborador-encabezado'>
                <img src={foto} alt="Foto de colaborador" className='colaborador-imagen' />
            </div>
            <div className='colaborador-info'>
                <h3 className='colaborador-nombre'>{nombre}</h3>
                <p className='colaborador-puesto'>{puesto}</p>
            </div>
            {
                fav ? <AiFillHeart color="red" onClick={() => favorito(id)} /> : <AiOutlineHeart onClick={() => favorito(id)} />
            }
        </div>
    );
}

export default Colaborador;