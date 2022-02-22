import './intro.scss'

import Me from '../../assets/perfil.png'

const Intro = () => {
    return(
        <div>
            <div className="intro">
                <div className="intro-left"> 
                    <div className="intro-left-wrapper">
                        <h2>Olá, eu me chamo</h2>
                        <h1>Marcus Sena</h1>    
                        <div className="intro-title">
                            <div className="intro-title-wrapper">
                                <div className="intro-title-item">Desenvolvedor Web</div>
                                <div className="intro-title-item">Frontend</div>
                                <div className="intro-title-item">Freelancer</div>
                                <div className="intro-title-item">& More...</div>
                            </div>
                        </div>
                        <div className="intro-desc">
                            Realizo serviços de design e desenvolvedor para clientes de todos os cantos, especializado na criação de sites elegantes e modernos, loja online na web, usando a mais recente tecnologia do mercado!
                        </div>
                    </div> 
                </div>
                <div className="intro-right">
                    <img src={Me} alt="my perfil " />
                </div>
            </div> 
        </div>
    )
}

export default Intro