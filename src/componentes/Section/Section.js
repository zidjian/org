import './Section.css'

function Section(props) {

    return (
        <section className='seccion'>
            <div className='seccion-contenedor'>
                <h1>Mi organización</h1>
                <img src="./imagenes/boton.png" alt="Botón de formulario" onClick={props.toggleFormulario} />
            </div>
        </section>
    );
}

export default Section