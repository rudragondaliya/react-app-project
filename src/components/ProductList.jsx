import React from 'react';
import Header from './Header';

const ProductList = ({ handleSubmit, Products, handleChange ,imageRef}) => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6 col-12">
              <label htmlFor="Product_name" className="form-label">Product Name</label>
              <input
                type="text"
                value={Products.pname || ''}
                onChange={handleChange}
                name="pname"
                className="form-control"
                id="Product_name"
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="Price" className="form-label">Price</label>
              <input
                type="number"
                value={Products.Price || ''}
                onChange={handleChange}
                name="Price"
                className="form-control"
                id="Price"
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="Stock" className="form-label">Stock</label>
              <input
                type="number"
                name="Stock"
                value={Products.Stock || ''}
                onChange={handleChange}
                className="form-control"
                id="Stock"
              />
            </div>
             <div className="col-md-6 col-12">
              <label htmlFor="rating" className="form-label">Rating</label>
              <input
                type="number"
                name="rating"
                value={Products.rating || ''}
                onChange={handleChange}
                className="form-control"
                id="rating"
                step="0.1" 
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="file" className="form-label">Image</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="form-control"
                id="file"
                ref={imageRef}
              />
            </div>

            <div className="col-6">
              <label htmlFor="desc" className="form-label">Description</label>
              <textarea
                name="desc"
                value={Products.desc || ''}
                onChange={handleChange}
                rows={4}
                className="form-control"
              ></textarea>
            </div>

            <div className="col-6">
              <label className="form-label d-block mb-2">Category</label>
              {["Mens", "Women", "kids"].map((cat, index) => (
                <div className="form-check form-check-inline" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={Products.category === cat}
                    onChange={handleChange}
                    value={cat}
                    name="category"
                    id={`category-${cat}`}
                  />
                  <label className="form-check-label" htmlFor={`category-${cat}`}>
                    {cat}
                  </label>
                </div>
              ))}
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="brand" className="form-label">Brand</label>
              <select
                name="brand"
                value={Products.brand || ""}
                onChange={handleChange}
                className="form-select"
                aria-label="Select Brand"
              >
                <option value="">--Select Brand--</option>
                {["Nike", "Samsung", "Philips"].map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductList;
