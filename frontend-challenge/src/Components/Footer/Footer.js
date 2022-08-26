import './Footer.scss';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import {useState} from 'react';


const Footer = () => {
    const [modal, setModal] = useState(false);

    const handleClick = e => {
      setModal(current => !current);
       e.preventDefault()
  };
    return (
        <footer className='footer'>
            <div className='footer__box'>
                <div className='footer__logo'>
                    <svg width="232" height="232" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1" clipPath="url(#clip0_5_5709)">
                        <path d="M192.798 101.186C190.496 85.545 182.69 68.6881 171.651 53.2679C192.998 27.8424 214.37 16.494 214.37 16.494C273.44 154.086 165.142 217.841 165.142 217.841C164.518 217.892 163.92 217.917 163.305 217.96C189.357 187.332 199.565 147.192 192.798 101.186Z" fill="#53273C"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M96.3949 166.709C77.6413 155.48 49.0786 146.92 24.0572 146.418C15.4451 146.248 7.24043 147.013 0 148.985C0 148.985 11.7792 186.618 58.8877 209.204C99.587 228.713 151.642 219.745 151.642 219.745C151.644 219.743 151.646 219.74 151.649 219.738C151.373 219.785 144.273 220.98 133.41 221.53C130.484 207.359 128.913 192.466 128.913 177.097C128.913 130.88 143.011 88.9478 165.911 58.1587C150.383 36.4876 128.18 17.8611 107.484 10.4754C92.7955 50.7176 78.7552 103.541 88.955 145.985C90.6924 153.227 93.1197 160.181 96.3949 166.709Z" fill="#53273C"/>
                        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M165.911 58.1579C166.2 58.5613 166.486 58.9658 166.771 59.3712C176.48 73.2188 183.438 88.2225 185.508 102.317C193.197 154.579 177.794 192.398 152.78 218.529C152.621 218.696 152.465 218.866 152.309 219.037C152.092 219.274 151.875 219.51 151.65 219.736C151.405 219.778 144.298 220.977 133.41 221.528C130.484 207.358 128.913 192.465 128.913 177.095C128.913 130.879 143.011 88.947 165.911 58.1579Z" fill="#53273C"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5_5709">
                        <rect width="232" height="232" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='footer__nextToLogo'>
                    <div className='footer__info'>
                        <h4 className='footer__headings footer__headings--color'>Mejor con Salud  <span>también está disponible en:</span></h4>
                        <ul className='footer__list'>
                            <li>Français</li>
                            <li>Deutsch</li>
                            <li>Português</li>
                            <li>English</li>
                        </ul>
                    </div>
                    <div className='footer__info'>
                        <h4 className='footer__headings footer__headings--color'>Síguenos</h4>
                        <ul className='footer__list footer__list--social'>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt="Logo Facebook"/>
                            </li>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/512/48/48899.png" alt="Logo Pinterest"/>
                            </li>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Logo Twitter"/>
                            </li>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Logo Instagram"/>
                            </li>
                            <li>
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="Logo Youtube"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='footer__division'/>
            <div className='footer__box'>
                <div className=''>
                    <img src='https://cdn.atomik.vip/shared/logo__mcontigo-group.png?auto=webp&quality=45&width=190&crop=16:9,smart,safe' alt='Logo mcontigo'/>
                </div>
                <div className=''>
                    <p className='footer__text'> <span>Mejor con Salud</span> Revista sobre buenos hábitos y cuidados para tu salud <br/>© 2012 – 2022. Todos los derechos reservados.
                    <br/>
                    El contenido de esta publicación se replica con el fin de realizar un challenge de entrevista técnica. Le recomendamos visitar la página oficial para tener información real.</p>
                </div>
                <div className='footer__newsletter'>
                    <p className='footer__text'>Suscribite al newsletter:</p>
                    <div>
                        <input type='email'/>
                        <button onClick={handleClick}>Enviar</button>
                        {modal ? <Modal greetings={`Te has suscrito a nuestro Newsletter`} onClick={() => setModal(false)}/> : null}
                    </div>
                </div>
            </div>
            <hr className='footer__division'/>
            <div className='footer__box'>
                <div className='footer__column footer__info'>
                    <h4 className='footer__headings'>Destacados</h4>
                    <ul className='footer__list'>
                        <li>Cáncer</li>
                        <li>Ansiedad</li>
                        <li>Cáncer de mama</li>
                        <li>Diabetes</li>
                    </ul>
                </div>
                <div className='footer__column footer__info'>
                    <h4 className='footer__headings'>Enlaces útiles</h4>
                    <ul className='footer__list footer__list--links'>
                        <li>
                            <Link to={`/faq`}>Preguntas frecuentes</Link>
                        </li>
                        <li>
                            <Link to={`/contacto`}>Contacto</Link>
                        </li>
                        <li>
                            Términos y condiciones de uso
                        </li>
                        <li>
                            Política de privacidad
                        </li>
                    </ul>
                </div>
                <div className='footer__column footer__info'>
                    <h4 className='footer__headings'>Otros sitios web</h4>
                    <ul className='footer__list footer__list--sites'>
                        <li><img src='https://cdn.atomik.vip/themes/mcs/icon-mcs-alpha.svg?auto=webp&quality=45&width=32&crop=16:9,smart,safe'/></li>
                        <li><img src='https://cdn.atomik.vip/themes/mcs/icon-em-alpha.svg?auto=webp&quality=45&width=32&crop=16:9,smart,safe'/></li>
                        <li><img src='https://cdn.atomik.vip/themes/mcs/icon-ma-alpha.svg?auto=webp&quality=45&width=32&crop=16:9,smart,safe'/></li>
                        <li><img src='https://cdn.atomik.vip/themes/mcs/icon-lmem-alpha.svg?auto=webp&quality=45&width=32&crop=16:9,smart,safe'/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer