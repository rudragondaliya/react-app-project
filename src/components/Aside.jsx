import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <>
  
      <div className="aside-main overflow-hidden bg-dark text-white d-none d-md-block" style={{ minHeight: '100vh', width: '250px' }}>
        <h3 className='text-white text-center mt-4'>🛍️ MyStore</h3>
        <hr className='border border-3' />
        <div className="nav-links">
          <ul className='list-unstyled text-white p-4'>
            <li className='p-2 fw-semibold fs-5'>
              <Link to="/ProductList" className="text-white text-decoration-none">Product List</Link>
            </li>
            <li className='p-2 fw-semibold fs-5'>
              <Link to="/ProductCard" className="text-white text-decoration-none">Product Data</Link>
            </li>
            <li className='p-2 fw-semibold fs-5'>
              <Link to="/Cart" className="text-white text-decoration-none">Product Card</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;

