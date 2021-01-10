import React from 'react';

const CardButtons = (props) => {
    
    const modifier = props.modi || "";
    const handleClick = (value, fn) => {
        const quantity = props.quantity;
        (0 <=quantity + value && quantity + value <=99) && fn(quantity + value);
    }

    const handleChange = (e, fn) => {
        const {value} = e.target;
        (value >= 0 && value <=99) ? fn(value) : fn(0);
    }

    const updateCart = (product, fn) => {
        fn(product)
    }

    return (
        <div className="card--buttons-container">
            <button className={`card--button left--button remove ${modifier}`} onClick={(e)=> handleClick(-1, props.fn)}><i className="fas fa-minus"></i></button>
            <input className = {`card--button card--input ${modifier}`} type="number" placeholder="0" value={props.quantity} name="input" onChange={(e) =>handleChange(e, props.fn)}/>
            <button className={`card--button add ${modifier}`} name="add" onClick={(e)=> handleClick(1, props.fn)}><i className="fas fa-plus"></i></button>
            {!props.modi && 
            <button className="card--button right--button cart" onClick={()=> updateCart(props.product, props.updateCart)}><i className="fas fa-cart-plus"></i></button>}
        </div>
    )
}

export default CardButtons;