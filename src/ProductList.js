import React, { useState } from 'react';
import './ProductList.css'; // You can define your CSS styles here

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Calculate the indexes of the products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="product-list">
      {currentProducts.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
