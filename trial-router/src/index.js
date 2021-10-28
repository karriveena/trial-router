import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Favoritecontextprovider} from './Store/Favouritecontext';

ReactDOM.render(
  <Favoritecontextprovider>
  <BrowserRouter>
  
    <App />
    </BrowserRouter>
    </Favoritecontextprovider>,
  document.getElementById('root')
);


