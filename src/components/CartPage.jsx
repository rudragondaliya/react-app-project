import React from 'react';
import Header from './Header';

const CartPage = ({ cartItems, handleQtyChange,handleCartEdit,handleCartDelete }) => {
  const getSubtotal = () => cartItems.reduce((sum, item) => sum + item.qty * item.Price, 0);
  const getDiscount = () => cartItems.reduce((sum, item) => sum + (item.discount || 0) * item.qty, 0);
  const total = getSubtotal() - getDiscount();

  return (
    <>
      <Header />
      <div className="container my-5 cartbar">
       
        <div className="d-flex justify-content-start mb-4">
          <h5 className="me-4 fw-bold border-bottom border-2">1. Cart</h5>
          <h5 className="me-4 text-muted">2. Checkout</h5>
          <h5 className="text-muted">3. Payment</h5>
        </div>

        <div className="row">
         
          <div className="col-md-8">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={item.file.url}
                        alt={item.pname}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 className="card-title fw-semibold">{item.pname}</h5>
                        <p className="card-text ">{item.desc}</p>
                       <p>
                          Brand: <strong>{item.brand || "XL"}</strong> | Category:{" "}
                          <strong>{item.category || "Default"}</strong>
                        </p>
                        <div className="d-flex align-items-center mb-2">
                          <span className="fw-bold fs-5 me-2">${item.Price}</span>
                          {item.originalPrice && (
                            <span className="text-muted text-decoration-line-through">${item.originalPrice}</span>
                          )}
                        </div>
                        
                        <div className="d-flex align-items-center mb-2">
                          <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={() => handleQtyChange(item.id, -1)}
                            disabled={item.qty === 1}
                          >
                            -
                          </button>
                          <span className="fw-bold">{item.qty}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => handleQtyChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="d-flex gap-2">
                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5 className="mb-3 fw-semibold">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Sub Total</span>
                <span>${getSubtotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Discount</span>
                <span className="text-success">-${getDiscount().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span className="text-danger">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-dark w-100 mb-3">Proceed to Checkout</button>
              <small className="text-muted">
                Estimated Delivery by <strong>25 April, 2022</strong>
              </small>
            </div>

         
            <div className="mt-3">
              <h6>Have a Coupon?</h6>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Coupon Code" />
                <button className="btn btn-outline-danger">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

