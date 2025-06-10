import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/home-banner.webp';
import card1 from '../assets/img/product-img-1.webp';
import card2 from '../assets/img/product-img-2.webp';
import card3 from '../assets/img/product-img-3.webp';
import card4 from '../assets/img/product-img-4.webp';

const Home = ({handleLogin}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-semibold" to="#">Garderobe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse bg-light p-4" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center text-lg-start">
              <li className="nav-item fw-semibold">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link mx-2" to="/ProductList">ADMIN PANEL</Link>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link" to="#">SERVICES</Link>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link mx-2" to="#">ABOUT US</Link>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link" to="#">NEWS</Link>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link mx-2" to="#">CONTACT</Link>
              </li>
            </ul>
            <div className="icons d-flex justify-content-center justify-content-lg-end align-items-center gap-3 me-3 mt-2 mt-lg-0">
              <i className="bi bi-search fs-5 fw-semibold" />
              <i className="bi bi-person-circle fs-5 fw-semibold" />
              <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
            <input type="email" className="form-control" id="recipient-name" />
          </div>
             <div className="mb-3">
            <label htmlFor="password" className="col-form-label">Password:</label>
            <input type="password" className="form-control" id="password" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button className='btn btn-primary' data-bs-dismiss="modal" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
</div>


      <div className="container-fluid p-0">
        <section className="banner">
          <div className="row gx-0 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 text-center text-lg-start p-5">
              <h1 className="display-3 fw-bold">Brand New</h1>
              <h1 className="display-3 fw-bold">Collection</h1>
              <p className="mt-3">
                Mauris vitae ultricies leo integer malesuada tempor orci dapibus ultrices diam<br />
                in arcu cursus euismod purus viverra accumsan.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-4 mt-3">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" />
                  <span>Top Brands</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" />
                  <span>High Quality</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" />
                  <span>Free Delivery</span>
                </div>
              </div>
              <button className="btn mt-4 ex-btn text-white p-3">EXPLORE SHOP</button>
            </div>
            <div className="col-lg-6 text-center">
              <img id="main-img" src={banner} alt="Main Banner" className="img-fluid" />
            </div>
          </div>
        </section>
      </div>

      <section className="policy py-4 bg-dark text-white">
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-6  col-md-3 mb-3 mb-md-0">
             < i class='bxr  bx-credit-card-front fs-1' ></i> 
              <h5 className="mt-2">Secure Payment</h5>
              <small className="text-secondary">100% secure payment</small>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-md-0">
             < i class='bxr  bx-refresh-cw fs-1'></i> 
              <h5 className="mt-2">30 Days Return</h5>
              <small className="text-secondary">If goods have problems</small>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-md-0">
              < i class='bxr  bx-refresh-cw fs-1'></i> 
              <h5 className="mt-2">24/7 Support</h5>
              <small className="text-secondary">Dedicated support</small>
            </div>
            <div className="col-6 col-md-3">
         < i class='bxr  bx-truck fs-1'  ></i> 
              <h5 className="mt-2">Free Delivery</h5>
              <small className="text-secondary">For all orders over $80</small>
            </div>
          </div>
        </div>
      </section>

      <section className="products p-5">
        <div className="container-fluid">
          <div className="title text-start mb-4">
            <p><small className="text-secondary fw-semibold fs-5">Check out latest products</small></p>
            <h1 className="text-black display-5 fw-semibold">New Arrivals</h1>
          </div>
          <div className="row justify-content-center g-4">
            {[card1, card2, card3, card4].map((img, index) => {
              const titles = ['Snapback Cap', 'Gray Shoes', 'Black T-shirt', 'Retro Sunglasses'];
              const prices = ['$55.00', '$50.00', '$50.00', '$55.00'];
              const oldPrices = ['$45.00', '$100.00', '$80.00', '$60.00'];

              return (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card h-100">
                    <img src={img} className="card-img-top" alt="Product" />
                    <div className="card-body">
                      <h5 className="card-title">{titles[index]}</h5>
                      <h6 className="card-subtitle mt-2 text-secondary">
                        {prices[index]} <span className="ms-2 text-decoration-line-through">{oldPrices[index]}</span>
                      </h6>
                      <div className="rating text-warning mt-2">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
<footer className="text-center text-lg-start bg-body-tertiary text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
  
  </section>

  <section className>
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Garderobe
             
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
    
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
      
      </div>
  
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="#">Garderobe.com</a>
  </div>
</footer>
    </>
  );
};

export default Home;

