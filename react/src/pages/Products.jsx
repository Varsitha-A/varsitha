import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState} from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data)); 
    },[])
    // const products = [
    //     { id: 1, name: 'Laptop', price: 10000 },
    //     { id: 2, name: 'Mouse', price: 15000 },
    //     { id: 3, name: 'Keyboard', price: 20000 },
    // ];
  return (
    <div>
        <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h4>{product.name}</h4>
                    <h5>Price: ₹{product.price}</h5>
                    <Link to={`/products/${product.id}`}> View Details</Link>
                </div>
            ))}
         
    </div>
  )
}

export default Products