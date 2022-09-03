import React from 'react'

const ProductCard = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 12, border: '1px solid grey', height: '280px', width: '200px'}}>
        <div><img src={props.image} alt={props.imageUrl} height="150" width="150" /></div>
        <div>{props.title}</div>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
            <span>INR {props.price}</span>
            <button onClick={props.addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard