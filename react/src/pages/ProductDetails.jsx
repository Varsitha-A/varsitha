import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 10000 ,'description':'High performance laptop'},
        { id: 2, name: 'Mouse', price: 15000 ,'description':'Wireless mouse'},
        { id: 3, name: 'Keyboard', price: 20000 ,'description':'Mechanical keyboard'},
    ];
    const { id } = useParams();
    const product = products.find((p) => p.id ===Number(id));
  return (
    <div>
        <h1>Product Details</h1>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
    </div>  
  )
}

export default ProductDetails