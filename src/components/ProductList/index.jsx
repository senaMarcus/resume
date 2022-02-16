import Product from '../Product'
import './productList.css'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Criar & Inspirar. Isso é <span>MS Developer</span> !</h1>
                <p className="pl-desc">
                    O <span>MS Developer</span> tem como diferencial esse portifólio que muitos esperam para ter, arrojado, landing-pages inovadoras e muito mais dentro de cada projeto! 
                </p>
            </div>
            <div className="pl-list">
                <Product />
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