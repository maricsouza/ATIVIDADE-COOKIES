import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/all-products/index'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Detalhes from './pages/product-details';
import Carr from './pages/buy'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/detalhes" component={Detalhes}/>
          <Route path="/carrinho" component={Carr} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

