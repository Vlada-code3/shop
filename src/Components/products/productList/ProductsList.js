import React from 'react';
import ProductsListItem from './productsListItem/ProductsListItem';
import { ProductsListContainer } from './ProductsListStyled';

import PropTypes from 'prop-types';
const ProductsList = ({ products, deleteChair}) => {
    return (
        <ProductsListContainer>
            {products.map(product=>(
                <ProductsListItem product={product} key={product.id} deleteChair={deleteChair}/>
             ) )}
        </ProductsListContainer>
    );
}

ProductsList.protoTypes={
    products: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default ProductsList;