import './Faq.scss';
import Accordion from '../Accordion/Accordion';

const Faq = () => {
    return (
        <div className='faq'>
            <div className='faq__titleBox'>
                <h1 className='faq__title'>Contactate con nosotros</h1>
            </div>
            <Accordion/>
        </div>
    )
}
export default Faq