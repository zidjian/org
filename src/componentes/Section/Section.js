import './Section.css'

function Section(props) {

    return (
        <section className='seccion'>
            <div className='seccion-contenido seccion-contenedor'>
                <h2 className='seccion-titulo'>Mi organización</h2>
                <img src="./imagenes/boton.png" alt="Botón de formulario" onClick={props.toggleFormulario} />
            </div>
        </section>
    );
}

export default Section