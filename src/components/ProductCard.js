import React from 'react';

const ProductCard = (props) => {
    
    return (
        <div>
            <div className="card" style={
                {
                    display: 'flex',
                    margin: '40px auto',
                    width: '60%',
                    borderRadius: '5px'
                }
            }>
                <img
                    className="card--image"
                    src={`${props.product.imageSrc}`}
                    alt=""
                    style={
                        {
                            width: '50%',
                            height: '100%',
                            borderRadius: '5px 0 0 5px'
                        }
                    }
                />

                <div style={
                    {
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }
                }>
                    <span className="card--label">${`${props.product.price}`}</span>
                    <div className="card--buttons-container">
                        <button className="card--button remove md"><i className="fas fa-minus"></i></button>
                        <input className="card--button card--input md" type="number" placeholder="0" />
                        <button className="card--button add md"><i className="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard