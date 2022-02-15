import './intro.css'

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
                                <div className="i-title-item">TECNÓFILO!</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="i-right">right</div>
            </div>
        </div>
    )
}

export default Intro