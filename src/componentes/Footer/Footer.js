import './Footer.css'

function Footer() {
    return (
        <footer className='piepagina'>
            <div className='piepagina-contendio seccion-contenedor'>
                <div className='social'>
                    <ul className='social-lista'>
                        <li className='social-elemento'>
                            <a href="https://github.com/" className='social-link'>
                                <img src="./imagenes/facebook.png" alt="" />
                            </a>
                            <a href="https://github.com/" className='social-link'>
                                <img src="./imagenes/twitter.png" alt="" />
                            </a>
                            <a href="https://github.com/" className='social-link'>
                                <img src="./imagenes/instagram.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='logo'>
                    <img src="./imagenes/logo.png" alt="" />
                </div>
                <div className='copyright'>
                    <p className='copyright-texto'>&copy; 2023. Desarrollador por Waldir Maidana</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;