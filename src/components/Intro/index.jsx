import './intro.css'

import Me from '../../assets/perfil.png'

const Intro = () => {
    return(
        <div>
            <div className="i">
                <div className="i-left"> 
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Olá, eu me chamo</h2>
                        <h1 className="i-name">Marcus Sena</h1>    
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Engenheiro de Software</div>
                                <div className="i-title-item">Desenvolvedor Web</div>
                                <div className="i-title-item">Apaixonado por Astronomia</div>
                                <div className="i-title-item">Músico</div>
                                <div className="i-title-item">DC MELHOR QUE MARVEL!</div>
                            </div>
                        </div>
                        <div className="i-desc">
                            Realizo serviços de design e desenvolvedor para clientes de todos os cantos, especializado na criação de sites elegantes e modernos, loja online na web, usando a mais recente tecnologia do mercado!
                        </div>
                    </div> 
                </div>
                <div className="i-right">
                    <img src={Me} alt="" className="i-img"/>
                </div>
            </div> 
        </div>
    )
}

export default Intro