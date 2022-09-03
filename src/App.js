import './App.css';
import { getAllProducts } from './service';
import { useEffect, useReducer } from 'react';
import { ecomReducer } from './reducer';
import ProductList from './components/productList';
import CartList from './components/cartList';
import { ADD_TO_CART, ADD_PRODUCTS, UPDATE_PRODUCT_QTY } from './action';
function App() {
  const initialState = {
    cartData: [],
    productList: []

  }
  const [state, dispatch] = useReducer(ecomReducer, initialState)
  const callProductsApi = async () => {
    try {
      const response = await getAllProducts();
      dispatch({ type: ADD_PRODUCTS, payload: response })
    }
    catch (e) { console.error(e) }

  }
  const increaseQty = (item) => {
    console.log(item.qty)
    item.qty += 1;
    console.log(item.qty)
    dispatch({ type: UPDATE_PRODUCT_QTY, payload: item })
  }
  const addToCart = (item) => {
    if (item.rating.count > 0) {
      let flag = false;
      if(state.cartData.length > 0){
        flag = state.cartData.map((i) => i.id === item.id ? true : false)
      }
      console.log(flag)
      if(!flag || flag[0] === false){
        dispatch({ type: ADD_TO_CART, payload: item, qty: 1 })
      }
        else{
            let modifiedItem = {}
            state.cartData.map((i) => i.id === item.id ? modifiedItem = i : modifiedItem = {})
            increaseQty(modifiedItem)
        }
    }
  }
  const decreaseQty = (item) => {
    item.qty -= 1;
    dispatch({ type: UPDATE_PRODUCT_QTY, payload: item })
  }
  useEffect(() => {
    (async () => await callProductsApi())();
  }, [])
  return (
    <div className="App">
      {state.productList ? <ProductList products={state?.productList} addToCart={(e) => addToCart(e)} /> : <h1>Loading...</h1>}
      {state?.cartData ? <CartList cartData={state?.cartData} increaseQty={(e) => increaseQty(e)} decreaseQty={(e) => decreaseQty(e)} /> : <span>EmptyCart</span>}
    </div>
  );
}

export default App;
