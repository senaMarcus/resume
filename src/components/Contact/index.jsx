import './contact.css'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>    
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Quer falar a respeito do seu projeto? Vamos lá!</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img 
                                    src={Phone} 
                                    alt="" 
                                    className="c-icon" 
                                />
                                +55 31 99703-7152
                            </div>
                            <div className="c-info-item">
                                <img 
                                    src={Email} 
                                    alt="" 
                                    className="c-icon" 
                                />
                                    maarvins.19@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img 
                                    src={Address} 
                                    alt="" 
                                    className="c-icon" 
                                />
                                    Entre em contato para nos localizarmos!
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Qual é a sua história?</b> Entre em contato. Estamos sempre disponíveis caso o projeto certo apareça!
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Contact      