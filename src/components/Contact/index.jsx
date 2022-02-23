import { useRef, useState,useContext } from 'react'
import './contact.scss'

import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'

import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    
    const handleSubmit = (e) => {
        e.preventDefault() //utilizando para quando clicar no btn submit nao dar refresh na pagina
        emailjs
            .sendForm(
                'service_oyre5bx',
                'template_1cngpy7',
                formRef.current,
                'user_aUpxughc8hZNvvEFbQkLt'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                }, 
                (error) => {
                    console.log(error.text);
                },
                formRef.current.reset()
            );
    }

    return (
        <div className="contact">
            <div className="contact-bg"></div>    
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h1 className="contact-title">Quer falar a respeito do seu projeto? Vamos lá!</h1>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <img 
                                    src={Phone} 
                                    alt="phone icon" 
                                />
                                +55 31 99703-7152
                            </div>
                            <div className="contact-info-item">
                                <img 
                                    src={Email} 
                                    alt="email icon" 
                                />
                                    maarvins.19@gmail.com
                            </div>
                            <div className="contact-info-item">
                                <img 
                                    src={Address} 
                                    alt="address icon" 
                                />
                                    Entre em contato para nos conhecermos melhor!
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <p className="contact-desc">
                            <b>Qual é a sua história?</b> Entre em contato. Estamos sempre disponíveis caso o projeto certo apareça!
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Nome' name="user_name" />
                            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Subject' name="user_subject" />
                            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Email' name="user_email" />
                            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder='Mensagem' name="message"/>
                            <button className="btn btn-white btn-animate">Enviar</button>
                            {done && <p>🚀 Agradeço o contato. Retornarei em breve... ✅</p>}
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact      