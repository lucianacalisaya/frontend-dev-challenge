import {Link} from 'react-router-dom'
import './Modal.scss'

function Modal ({greetings}, props) {
    return (
        <div className='modal'>
            <div className='modal__body'>
                <div className='modal__close'>
                    <Link to='#' onClick={(e) => props.handleClick(e.target)}>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0001 6.99997H4.41406L9.70706 1.70697L8.29306 0.292969L0.58606 7.99997L8.29306 15.707L9.70706 14.293L4.41406 8.99997H19.0001V6.99997Z" fill="black"/>
                        </svg>
                    </Link>
                </div>
                <div className='modal__greeting'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="black"/>
                        <path d="M7.99902 11.587L5.70002 9.29197L4.28802 10.708L8.00103 14.413L14.707 7.70697L13.293 6.29297L7.99902 11.587Z" fill="black"/>
                    </svg>

                    <h4>{greetings}</h4>
                </div>
                <div className='modal__accept'>
                    <Link onClick={(e) => props.handleClick(e.target)} to='#'>Aceptar</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Modal