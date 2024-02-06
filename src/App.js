import React, {useState} from 'react';
import ProductList from './ProductList';
import './App.css';
import Cart from './Cart';
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: '$10.99',
    image: 'path/to/product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    price: '$19.99',
    image: 'path/to/product2.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    price: '$19.99',
    image: 'path/to/product3.jpg',
  },{
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    price: '$19.99',
    image: 'path/to/product4.jpg',
  },{
    id: 5,
    title: 'Product 5',
    description: 'Description for Product 5',
    price: '$19.99',
    image: 'path/to/product4.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for Product 3',
    price: '$19.99',
    image: 'path/to/product3.jpg',
  },{
    id: 7,
    title: 'Product 7',
    description: 'Description for Product 4',
    price: '$19.99',
    image: 'path/to/product4.jpg',
  },{
    id: 8,
    title: 'Product 8',
    description: 'Description for Product 5',
    price: '$19.99',
    image: 'path/to/product4.jpg',
  },{
    id: 9,
    title: 'Product 9',
    description: 'Description for Product 3',
    price: '$19.99',
    image: 'path/to/product3.jpg',
  },{
    id: 10,
    title: 'Product 10',
    description: 'Description for Product 4',
    price: '$19.99',
    image: 'path/to/product4.jpg',
  },{
    id: 11,
    title: 'Product 11',
    description: 'Description for Product 5',
    price: '$19.99',
    image: 'path/to/product4.jpg',
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <ProductList products={products} />
      
    </div>
  );
};

export default App;
