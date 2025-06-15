
import React, { useState } from 'react';
import Header from './Header';


const Card = ({data,handleAddToCart }) => {
  const [textFilter, setTextFilter] = useState("");

  const filteredData = data.filter((val) =>
    val.pname?.toLowerCase().includes(textFilter.toLowerCase())
  );

  return (
    <>
      <Header textFilter={textFilter} setTextFilter={setTextFilter} />

      <div className="title p-3">
        <h1>Product Cards</h1>
      </div>

      <div className="container">
        <div className="row">
          {filteredData.map((val) => {
            const { id, pname, Price, Stock, file, desc,category,rating } = val;

            return (
              <div className="col-md-4" key={id}>
                <div className="card mt-3 shadow-sm" style={{ width: '80%' }}>
                  <img
                    src={file?.url}
                    className="card-img-top object-fit-cover"
                    alt={pname}
                    height={200}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pname}</h5>
                    <h6 className="card-subtitle mb-2">Stock: {Stock}</h6>
                    <h6 className="card-subtitle mb-2">Price: ${Price}</h6>
                    <h6 className='card-subtitle mb-2'>Category: {category}</h6>
                    <h6 className='card-subtitle mb-2'>rating: {rating}</h6>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn w-100"  onClick={() => handleAddToCart(val)}>Add to cart</a>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;


