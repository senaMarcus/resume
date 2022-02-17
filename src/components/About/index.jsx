import { AboutCard, AboutContent, AboutLeft, AboutRight } from './styles.js'

import Front from '../../assets/test.jpg'

const About = () => {
    return(
            <AboutContent>
            <AboutLeft>
                <div className="a-card bg"></div>
                <AboutCard>
                    <img src={Front} alt="" />
                </AboutCard>
            </AboutLeft>
            <AboutRight>
                <h1>Sobre mim</h1>
                <h4>
                    Senta ai, porque lá vem história! 
                </h4>
                <p>
                    Me chamo Marcus, tenho 27 anos, nascido numa cidade do interior de Minas Gerais/Brasil chamada Nanuque. A minha paixao pela tecnologia esta no meu sangue. Por algum motivo, durante minha juventude, acabei desviando meu foco da tecnologia para outras áreas, mas de 2020 até os dias de hoje tenho me aprofundado bastante nesse universo. <br/> <br/>
                    Desde 03/2021 venho me imergindo dentro da programação, mais especificamente no mundo FRONTEND, utilizando tecnologias como: HTML, CSS, JAVASCRIPT (frameworks:REACTJS, NODEJS, ...) e muito mais.
                    Implemento aplicativos, sites e landing pages desde o conceito até a implantação, sempre com designs responsivos e técnicas de SEO. <br/>  <br/>
                    Sou muito criativo, atento aos detalhes, sempre focado em resolver problemas e ajudar as pessoas. 
                </p>
            </AboutRight>
            </AboutContent >
    )
}
export default About    