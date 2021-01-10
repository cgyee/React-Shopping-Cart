import React from 'react';
import ProductCard from './ProductCard';


const Cart = (props) => {
    console.log(props.cart)
     const productCards = props.cart.map(product => <ProductCard product={product} />)
    return (
        <div className="product-content">
            <div className="card-group" style = {
                {
                    flexDirection:'column',
                    justifyContent:'center'
                }
            }>
                {productCards}
            </div>
        </div>
    )
}


export default Cart;