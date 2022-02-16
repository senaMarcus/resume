import Product from '../Product'
import './productList.css'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Criar & Inspirar. Isso é <span>MS Developer</span> !</h1>
                <p className="pl-desc">
                    Tenho esse portifólio como diferencial, contendo projetos estruturados em tecnologia de ponta, landing-pages inovadoras e muito mais ! 
                </p>
            </div>
            <div className="pl-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductList