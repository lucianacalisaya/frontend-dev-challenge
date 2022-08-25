import Modal from "../Modal/Modal";
import './Form.scss'
import {useState} from 'react';

const Form = () => {
    const [modal, setModal] = useState(false);

    const handleClick = e => {
      setModal(current => !current);
       e.preventDefault()
  };
    return (
        <div className='form'>
            <h1 className='form__title'>Ponte en contacto con nosotros</h1>
            <div className='form__body'>
                <div className='form__box'>
                    <label className='form__label'>Nombre</label>
                    <input className="form__fill" type='email' placeholder='Nombre'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Email</label>
                    <input className="form__fill" type='email' placeholder='Email'/>
                </div>
                <div className='form__box'>
                    <legend className="form__label">Razón de contacto</legend>
                    <div className='form__fill form__fill--reasons'>
                        <div>
                            <input type='radio' value=''/>
                            <label>Consulta</label>
                        </div>
                        <div>
                            <input type='radio' value=''/>
                            <label>Sugerencias</label>
                        </div>
                        <div>
                            <input type='radio' value=''/>
                            <label>Trabaja con nosotros</label>
                        </div>
                    </div>
                </div>
                <div className='form__box form__box--center'>
                    <input type='checkbox'/>
                    <label>Deseo suscribirme al newsletter</label>
                </div>
                <div className='form__box form__box--end'>
                    <button className='form__send' onClick={handleClick}>Enviar</button>
                </div>
            </div>
            {modal ? <Modal greetings={`Pronto nos pondremos en contacto con usted`} onClick={() => setModal(false)}/> : null}

        </div>
    )
}

export default Form