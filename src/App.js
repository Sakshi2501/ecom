import React from 'react';
import './App.css';
import ProductList from './ProductList';
import Pagination from './Pagination';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: '$10.99',
    image: './assets/images/product1.jpeg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    price: '$19.99',
    image: './assets/images/product2.jpeg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    price: '$19.99',
    image:'./assets/images/product3.jpeg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    price: '$19.99',
    image: './assets/images/product4.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for Product 4',
    price: '$19.99',
    image: './assets/images/product4.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for Product 4',
    price: '$19.99',
    image: './assets/images/product4.jpg',
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description for Product 4',
    price: '$19.99',
    image: './assets/images/product4.jpg',
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description for Product 4',
    price: '$19.99',
    image: './assets/images/product4.jpg',
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'Description for Product 4',
    price: '$19.99',
    image: './assets/images/product4.jpg',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Product Catalog</h1>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/pagination" element={<Pagination products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
