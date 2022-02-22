import Product from '../Product'
import './productList.scss'
import {products} from '../../data'

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="product-list-texts">
                <h1>Criar & Inspirar. Isso é<br/> <span>MS Developer</span> !</h1>
                <p>
                    Tenho esse portifólio como diferencial, contendo projetos estruturados em tecnologia de ponta, landing-pages inovadoras e muito mais ! 
                </p>
            </div>
            <div className="product-list-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} title={item.title} repository={item.repository}/>
                ))}                
            </div>
        </div>
    )
}

export default ProductList