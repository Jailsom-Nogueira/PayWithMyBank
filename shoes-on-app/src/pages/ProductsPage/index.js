import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../components/GlobalContext';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

import ProductsList from './ProductsList';
import ProductsFilter from './ProductsFilter';

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
      <ProductsFilter />
      <ProductsList />
    </div>
  );
}
