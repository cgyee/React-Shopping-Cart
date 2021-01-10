import React, {useState} from 'react';
import CardButtons from './CardButtons';


const Card = (props) => {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="card">
            <img className="card--image" src={`${props.product.imageSrc}`} alt=""/>
            <span className="card--label">${`${props.product.price}`}</span>
            < CardButtons 
                product={props.product}
                quantity={quantity}
                fn={setQuantity} 
                updateCart={(product)=> {
                    const newProduct = Object.assign({}, {quantity}, product);
                    props.setCart(prevState => {
                        const newProducts = prevState.filter(p => p.name!==product.name);
                    return [...newProducts, newProduct]
                    })
                }}
            />
        </div>
    )
}

export default Card