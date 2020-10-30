import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    return getProductsList();
  }, []);

  const getProductsList = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      setAllProducts(response.data);
      console.log(response.data);
    } catch (err) {
      alert('Something went wrong, please try again later');
    }
  };

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}
