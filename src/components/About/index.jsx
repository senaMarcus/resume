import './about.css'

import Award from '../../assets/award.png'

import Front from '../../assets/test.jpg'

const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Front} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Sobre mim</h1>
                <h4 className="a-sub">
                    Senta ai, porque lá vem história! 
                </h4>
                <p className="a-desc">
                    Me chamo Marcus, tenho 27 anos, nascido numa cidade do interior de Minas Gerais/Brasil chamada Nanuque. A minha paixao pela tecnologia esta no meu sangue. Por algum motivo, durante minha juventude, acabei desviando meu foco da tecnologia para outras áreas, mas de 2020 até os dias de hoje tenho me aprofundado bastante nesse universo. <br/> <br/>
                    Desde 03/2021 venho me imergindo dentro da programação, mais especificamente no mundo FRONTEND, utilizando tecnologias como: HTML, CSS, JAVASCRIPT (frameworks:REACTJS, NODEJS, ...) e muito mais.
                    Implemento aplicativos, sites e landing pages desde o conceito até a implantação, sempre com designs responsivos e técnicas de SEO. <br/>  <br/>
Sou muito criativo, atento aos detalhes, sempre focado em resolver problemas e ajudar as pessoas. 
                </p>
            </div>
        </div>
    )
}
export default About    