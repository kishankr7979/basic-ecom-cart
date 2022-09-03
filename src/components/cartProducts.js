import React from 'react'

const CartProducts = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', border: '1px solid black'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <img src={props.image} height="40" width="40" alt={props.image}/>
            <span>{props.title}</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <span>INR {props.price}</span>
            <div style={{display: 'flex', flexDirection: 'row', gap: '6px'}}>
              <button onClick={props.decreaseQty}>-</button>
              <button onClick={props.increaseQty}>+</button>
              <span>{props.qty}</span>
            </div>
        </div>
    </div>  
  )
}

export default CartProducts