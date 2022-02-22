import './product.scss'

import { FiGithub } from 'react-icons/fi'


const Product = ({img,link,title, repository}) => {
    return (
        <div className="product">
            <div>
            <p className="card-title">{title} </p>
            <div className="product-browser">
                <div className="product-circle r"></div>
                <div className="product-circle y"></div>
                <div className="product-circle g"></div>
                <a href={repository} target="_blank" rel="noreferrer">
                    {/* <p className="card-title">{title}</p> */}
                    (Visitar Repositório Github)
                    <FiGithub />
                </a>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="product-img" />
            </a>
            </div>
        </div>
        
    )
}

export default Product