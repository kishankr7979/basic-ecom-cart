import React, { useEffect, useState } from 'react'
import CartProducts from './cartProducts'
const CartList = (props) => {
    const [cartValue, setCartValue] = useState(0);
    const calculateCartValue = (cartData) => {
        if(cartData.length === 0) setCartValue(0);
        cartData.map((i) => {
            setCartValue(cartValue + (i.price * i.qty))
        })
    }
    useEffect(() => {
        calculateCartValue(props.cartData)
    }, [props.cartData])
    return (
        <div style={{ height: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '30%' }}>
            {props.cartData.map((item) => {
                return (
                    <div key={item.id}>
                        <CartProducts price={item.price} image={item.image} title={item.title} decreaseQty={() => props.decreaseQty(item)} increaseQty={() => props.increaseQty(item)} qty={item.qty}/>
                    </div>
                )
            })}
            {props.cartData && <span>Total : INR {cartValue.toFixed(1)}</span>}
        </div>
    )
}

export default CartList