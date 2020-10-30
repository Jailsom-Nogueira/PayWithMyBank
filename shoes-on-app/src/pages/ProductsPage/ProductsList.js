import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../GlobalContext';
import styled from 'styled-components';

import SizeAndQuantity from './SizeAndQuantity';

const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 70vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default function ProductsList() {
  const allContext = useContext(GlobalContext);

  const [size, setSize] = useState('36');
  const [quantity, setQuantity] = useState('0');

  const handleChosenProduct = (productId, productPrice) => {
    if (!quantity || quantity === '0') {
      alert('Please choose a quantity');
    }

    allContext.setChosenProduct({
      size: size,
      quantity: quantity,
      productId: productId,
      productPrice: productPrice,
    });
  };

  const handleSize = (event) => {
    event.preventDefault();
    setSize(event.target.value);
  };

  const handleQuantity = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };
  console.log(allContext.chosenProduct);
  return (
    <ProductsListWrapper>
      {allContext.allProducts &&
        allContext.allProducts.map((product) => {
          return (
            <div key={product.id}>
              <img
                src={product.thumbnailURL}
                alt={`Thumbnail ${product.description}`}
              />
              <p>{product.description}</p>

              <SizeAndQuantity
                handleSize={handleSize}
                handleQuantity={handleQuantity}
              />

              <p>$ {product.price}</p>
              <button
                onClick={() => handleChosenProduct(product.id, product.price)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
    </ProductsListWrapper>
  );
}
