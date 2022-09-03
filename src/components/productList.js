
import React, { useState, useEffect, useCallback } from 'react'
import ProductCard from './productCard'
const ProductList = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedList, setSearchedList] = useState([]);
    const onSearch = useCallback((query) => {
        setSearchQuery(query)
        if(query){
            const list = searchedList.filter((item) => {
                return item.title.toLowerCase().includes(query.toLowerCase())
            })
            setSearchedList(list)
        }
        else {
            setSearchedList(props.products)
        }
    }, [props.products, searchedList])
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '70%' }}>
            <input value={searchQuery} onChange={(e) => onSearch(e.target.value)} placeholder="search" />
            <div style={{ height: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '100%' }}>
                {(searchedList.length > 0 ? searchedList : props.products).map((item) => {
                    return (
                        <div key={item.id}>
                            <ProductCard image={item.image} price={item.price} title={item.title} addToCart={() => props.addToCart(item)} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductList