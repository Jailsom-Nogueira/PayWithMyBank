import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import SizeAndQuantity from './SizeAndQuantity';
import { ProgressButton } from '../../components/Buttons/ProgressButton';

const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;

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
  const history = useHistory();

  const [size, setSize] = useState('36');
  const [quantity, setQuantity] = useState('0');

  const handleChosenProduct = (
    productId,
    productPrice,
    productDescription,
    productThumbUrl,
    productmMaxresURL,
    productColor,
  ) => {
    if (!quantity || quantity === '0') {
      alert('Please choose a quantity');
    } else {
      allContext.setChosenProduct({
        id: productId,
        description: productDescription,
        size: size,
        quantity: quantity,
        price: Math.floor(productPrice),
        color: productColor,
        thumbnailURL: productThumbUrl,
        MaxresURL: productmMaxresURL,
      });

      history.push('/checkoutpage');
    }
  };

  const handleSize = (event) => {
    event.preventDefault();
    setSize(event.target.value);
  };

  const handleQuantity = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

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

              <ProgressButton
                onClick={() =>
                  handleChosenProduct(
                    product.id,
                    product.price,
                    product.description,
                    product.thumbnailURL,
                    product.maxresURL,
                    product.color,
                  )
                }
              >
                Add to cart
              </ProgressButton>
            </div>
          );
        })}
    </ProductsListWrapper>
  );
}
