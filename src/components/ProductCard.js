import React, {useState} from 'react';
import CardButtons from './CardButtons';

const ProductCard = (props) => {
    console.log(props)
    const [quantity, setQuantity] = useState(props.product.quantity)
    
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
                    <span className="card--label">Qty:{`${quantity}`}</span>
                    < CardButtons
                        product={props.product}
                        quantity={quantity}
                        fn={setQuantity}
                        modi={'md'}
                    />
                    <button className="card--button" style= {
                        {
                            width: '100%',
                            height: '10%',
                            textAlign: 'center',
                            backgroundColor: '#2384c5',
                            borderStyle: 'none'

                        }
                    }>Update
                    </button>

                </div>
            </div>
        </div>
    )
}
export default ProductCard