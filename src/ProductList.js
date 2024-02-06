import React from 'react';

const ProductList = ({ products, currentPage }) => {
  const startIndex = (currentPage - 1) * 5;
  const endIndex = Math.min(startIndex + 5, products.length);
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div className="product-list">
      {visibleProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="product-details">
            <span className="price">{product.price}</span>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
