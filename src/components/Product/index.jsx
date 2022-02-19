import './product.css'

import { FiGithub } from 'react-icons/fi'


const Product = ({img,link,title, repository}) => {
    return (
        <div className="p">
            <div>
            <p className="card-title">{title} </p>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <a href={repository} target="_blank" rel="noreferrer" className="p-repo-link">
                    {/* <p className="card-title">{title}</p> */}
                    (Visitar Repositório Github)
                    <FiGithub />
                </a>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
            </div>
        </div>
        
    )
}

export default Product