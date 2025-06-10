import React, { useRef, useState } from 'react';

import Header from './Header';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const ProductCard = ({data,handleEdit,handleDelete}) => {

     const searchRef = useRef();
     const [textFilter, setTextFilter] = useState("");

 const filteredData = data.filter((row) =>
  row.pname?.toLowerCase().includes(textFilter.toLowerCase())
);


      const columns = [

    {
    name: "Image",
    selector: (row) => (
      <img
        src={row.file?.url}
        alt={row.product_name}
        style={{ width: "80px", height: "50px", objectFit: "cover" }}
      />
    ),
  },
  {
    name: "Name",
    selector: (row) => row.pname,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.Price,
    sortable: true,
  },
  {
    name: "Stock",
    selector: (row) => row.Stock,
    sortable: true,
  },
    {
    name: "Rating",
    selector: (row) => row.rating,
    sortable: true,
  },
  
  {
    name: "Description",
    selector: (row) => row.desc,
    wrap: true, 
  },
  {
    name: "Category",
    selector: (row)=> row.category,
    sortable:true,
  },
  {
    name: "Action",
    cell: (row) => (
      <>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => handleDelete(row.id)}
        >
          <MdDeleteOutline />
        </button>
        <Link to="/ProductList">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleEdit(row.id)}
        >
      <FaEdit />
        </button>
        </Link>
      </>
    ),
  },
];

  return (
    <>
   <Header setTextFilter={setTextFilter} texfilter={textFilter}/>
   <h1 className='mt-4 text-center'>Product Data</h1>
       <div className="row">
              <div className="col">
                 <DataTable
                  title="User Data"
                  data={filteredData}
                  columns={columns}
                  pagination
                  selectableRows
                  highlightOnHover
                  pointerOnHover
                  responsive
                  fixedHeader
                  fixedHeaderScrollHeight="300px"
                />

                
              </div>
            </div>
    </>
  );
}

export default ProductCard;
