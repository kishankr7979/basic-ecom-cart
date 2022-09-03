import axios from 'axios'

const getAllProducts = async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
}

export {getAllProducts};