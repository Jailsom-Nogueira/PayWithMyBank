import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

import ProductsList from './ProductsList';

export default function ProductsPage() {
  const allContext = useContext(GlobalContext);

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        allContext.setAllProducts(response.data.results);
      } catch (err) {
        alert('Something went wrong, please try again later');
      }
    };
    return getProductsList();
  }, []);

  return (
    <div>
      <ProductsList />
    </div>
  );
}
