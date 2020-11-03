import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../components/GlobalContext';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

import ProductsList from './ProductList/ProductsList';
import ProductsFilter from './ProductsFilter';

export default function ProductsPage() {
  const allContext = useContext(GlobalContext);
  const [filter, SetFilter] = useState('');

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

  const handleFilter = (event) => {
    SetFilter(event.target.value);
  };

  return (
    <div>
      <ProductsFilter handleFilter={handleFilter} />
      <ProductsList filter={filter} />
    </div>
  );
}
