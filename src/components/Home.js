import React from 'react';
import Card from './Card'


const Home = (props) => {
    const productCards = props.products.map((product, i) => <Card key={`product-${product.name}-${i}`} product={product} cart={props.cart} setCart={props.setCart} />)
    console.log(props.cart)
    return (
        <div className="product-content">
            <div className="card-group">
                {productCards}
            </div>
        </div>
    )
}

export default Home