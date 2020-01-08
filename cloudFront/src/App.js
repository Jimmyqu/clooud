import React, { useState } from 'react';
import './App.css';
import routes from "./router/index.js";
import { Store } from './store/index'
import { BrowserRouter,Link  } from "react-router-dom";
import { renderRoutes } from "react-router-config";

console.log(Store)

function App() {
  return (
    <Store.Provider>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Store.Provider>
  )
}

export default App;
