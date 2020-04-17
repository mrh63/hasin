import React from 'react';
import { useSelector } from 'react-redux'
import { Container } from 'reactstrap';
import ProductCard from './ProductCard';

const ProductList = () => {

    const products = useSelector(state => state.products);
    
    return (
        <Container className="product-list">
            {
                products.length > 0 && (
                    products.map(product => <ProductCard key={product.id} {...product}/>)
                )
            }
        </Container>
    )
}

export default ProductList;