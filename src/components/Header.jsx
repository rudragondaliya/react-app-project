
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setTextFilter, textfilter }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to="/">🛍️ MyStore</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="/ProductList">ProductList</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductCard">ProductData</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">ProductCards</Link>
              </li>
            </ul>

            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products..."
                aria-label="Search"
                name="search"
                value={textfilter}
                onChange={(e) => setTextFilter(e.target.value)}
              />
             <Link to="/CartPage" className="btn btn-warning w-100">
              Go to Cart 🛒
            </Link>

            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
