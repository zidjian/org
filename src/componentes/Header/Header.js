import "./Header.css";

function Header() {
    const background = 'no-repeat url(./imagenes/header.png)';
    return (
        <header className="cabecera" style={{ background: background, backgroundSize: 'cover' }}>
            <div className="cabecera-contenido seccion-contenedor" >
                <div className="logo">
                    <img src="./imagenes/logo.png" alt="Logo de Org" className="logo-imagen" />
                </div>
                <div className="eslogan">
                    <h1 className="eslogan-titulo">Personas y equipos</h1>
                    <p className="eslogan-info">Organizados en un solo lugar</p>
                </div>
            </div>
            <img src="./imagenes/equipo.png" alt="Imagen de equipo" className="cabecera-imagen" />
        </header>
    )
    ;
}

export default Header