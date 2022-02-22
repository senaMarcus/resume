import "./about.scss";
import Me from '../../assets/test.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src={Me}
            alt="About image"
          />
        </div>
      </div>
      <div className="about-right">
        <h1>Sobre Mim ✋🏻 </h1>
        <p>
          Mineiro, 27 anos, atualmente residindo na região metropolitana de Belo Horizonte.
        </p>
        <p className="about-desc">
          Desde a infância muito apaixonado por tecnologia, vendo nessa área a oportunidade de poder conviver com tanta inovação DIARIAMENTE. <br/><br/>
          "A tecnologia move o mundo!" <br/><br/>
          E você, tem movido algo?
        </p>
        
      </div>
    </div>
  );
};

export default About;