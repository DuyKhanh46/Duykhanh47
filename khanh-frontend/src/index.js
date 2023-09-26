import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './admin/admin'
import ProductList from './scenes/productList/ProductList'
import ProductDetail from './scenes/productDetaiil/ProductDetail'
import Home from './scenes/home/home'
import Checkout from './scenes/checkout/Checkout'
import Confirmation from './scenes/checkout/Confirmation';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartMenu from './scenes/global/CartMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product',
        element: <ProductList />
      },
      {
        path: 'product/page/:pageNum',
        element: <ProductList />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'checkout/success',
        element: <Confirmation />
      },
      {
        path: 'cart',
        element: <CartMenu />
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);