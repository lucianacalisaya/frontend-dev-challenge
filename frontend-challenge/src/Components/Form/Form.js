import Modal from "../Modal/Modal";
import {useState} from 'react';

const Form = () => {
    const [modal, setModal] = useState(false);

    const handleClick = e => {
      setModal(current => !current);
       e.preventDefault()
  };
    return (
        <div className="form">
            <h1>Ponte en contacto con nosotros</h1>
            <div>
                <div>
                    <label>Nombre</label>
                    <input type='email' placeholder='Nombre'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder='Email'/>
                </div>
                <div>
                    <legend>Razon de contacto</legend>
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
                <div>
                    <input type='checkbox'/>
                    <label>Deseo suscribirme al newsletter</label>
                </div>
                <div>
                    <button  onClick={handleClick}>Enviar</button>
                </div>
            </div>
            {modal ? <Modal greetings={`Pronto nos pondremos en contacto con usted`} onClick={() => setModal(false)}/> : null}

        </div>
    )
}

export default Form