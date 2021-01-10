import React, {useState} from 'react';


const Card = (props) => {
    const [quantity, setQuantity] = useState(0);

    const handleChange = (e) => {
        const {value} = e.target;
        (value >= 0 && value <=99) ? setQuantity(value) : setQuantity(0);
    }
    
    const handleClick = (value) => {
        (0 <=quantity + value && quantity + value <=99) && setQuantity(quantity + value); 
    }

    const addToCart = (product) => {
        const newProduct = Object.assign({}, {quantity}, product);
        props.setCart(prevState => {
            const newProducts = prevState.filter(p => p.name!==product.name);
            return [...newProducts, newProduct]
        })
        console.log(newProduct)
    }
    return (
        <div className="card">
            <img className="card--image" src={`${props.product.imageSrc}`} alt=""/>
            <span className="card--label">${`${props.product.price}`}</span>
            <div className="card--buttons-container">
              <button className="card--button left--button remove" onClick={()=> handleClick(-1)}><i className="fas fa-minus"></i></button>
              <input className = "card--button card--input" type="number" placeholder="0" value={quantity} name="input" onChange={handleChange}/>
              <button className="card--button add" name="add" onClick={()=> handleClick(1)}><i className="fas fa-plus"></i></button>
              <button className="card--button right--button cart" onClick={()=> addToCart(props.product)}><i className="fas fa-cart-plus"></i></button>
            </div>
        </div>
    )
}

export default Card