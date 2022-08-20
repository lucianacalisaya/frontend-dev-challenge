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
                        <h4 className='footer__headings footer__headings--color'>Titulo <span>holi</span></h4>
                        <ul className='footer__list'>
                            <li>hola hola</li>
                            <li>hola hola</li>
                            <li>hola hola</li>
                            <li>hola hola</li>
                        </ul>
                    </div>
                    <div className='footer__info'>
                        <h4 className='footer__headings footer__headings--color'>Titulo</h4>
                        <ul className='footer__list'>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='footer__division'/>
            <div className='footer__box'>
                <div>
                    <img src='' alt=''/>
                </div>
                <div>
                    <p className='footer__text'> <span>Neque porro quisquam est,</span> qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p className='footer__text'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                </div>
                <div>
                    <img src='' alt=''/>
                    <p className='footer__text'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
            </div>
            <hr className='footer__division'/>
            <div className='footer__box'>
                <div className='footer__info'>
                    <h4 className='footer__headings'>Titulo</h4>
                    <ul className='footer__list'>
                        <li>hola hola</li>
                        <li>hola hola</li>
                        <li>hola hola</li>
                        <li>hola hola</li>
                    </ul>
                </div>
                <div className='footer__info'>
                    <h4 className='footer__headings'>Titulo</h4>
                    <ul className='footer__list'>
                        <li>hola hola</li>
                        <li>hola hola</li>
                        <li>hola hola</li>
                        <li>hola hola</li>
                    </ul>
                </div>
                <div className='footer__info'>
                    <h4 className='footer__headings'>Titulo</h4>
                    <ul className='footer__list'>
                        <li>
                            <Link to={`/faq`}>Preguntas frecuentes</Link>
                        </li>
                        <li>
                            <Link to={`/contacto`}>Contacto</Link>
                        </li>
                        <li>
                            <input type='email'/>
                            <button onClick={handleClick}>Suscribite al newsletter</button>
                            {modal ? <Modal greetings={`Te has suscrito a nuestro Newsletter`} onClick={() => setModal(false)}/> : null}
                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer