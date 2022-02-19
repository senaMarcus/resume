import Product from '../Product'
import './productList.css'
import {products} from '../../data'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Criar & Inspirar. Isso é<br/> <span>MS Developer</span> !</h1>
                <p className="pl-desc">
                    Tenho esse portifólio como diferencial, contendo projetos estruturados em tecnologia de ponta, landing-pages inovadoras e muito mais ! 
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} title={item.title} repository={item.repository}/>
                ))}                
            </div>
        </div>
    )
}

export default ProductList