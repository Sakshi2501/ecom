import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map(page => (
        <Link key={page} to={`/?page=${page}`} className={currentPage === page ? 'active' : ''}>
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
