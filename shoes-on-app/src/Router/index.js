import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ProductsPage from '../pages/ProductsPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>

        <Route path="/">
          <h3>Page under construction (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
