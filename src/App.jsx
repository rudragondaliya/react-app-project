import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Aside from './components/Aside';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Card from './components/Card';
import CartPage from './components/CartPage';
import Home from './pages/Home';

const App = () => {
  const [Products, setProducts] = useState({});
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [category, setCategory] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const imageRef = useRef('')
  
   const navigate = useNavigate();

  const handleLogin = () => {
    const modalElement = document.getElementById('loginModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
    setTimeout(() => {
      navigate('/ProductList');
    }, 300); 
  };

  const location = useLocation();
  const isCartPage = location.pathname === '/CartPage';
  const isHome = location.pathname === '/';

  const url = "http://localhost:3000/Products";

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "category") {
      setProducts({ ...Products, category: value });
      return;
    }

    if (files) {
      const file = files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        let fileData = {
          name: file.name,
          type: file.type,
          url: reader.result,
        };
        setProducts({ ...Products, [name]: fileData });
      };
      reader.readAsDataURL(file);
      return;
    } else {
      setProducts({ ...Products, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${url}/${editId}`, Products);
      setEditId(null);
      toast.info("Products Updated Successfully!");
    } else {
      await axios.post(url, { ...Products, id: String(Date.now()) });
      toast.success("Products Added Successfully!");
    }
    setProducts({});
    handleFetch();
    imageRef.current.value = ''
  };

  const handleDelete = async (id) => {
    await axios.delete(`${url}/${id}`);
    handleFetch();
    toast.error("Products Deleted Successfully!");
  };

  const handleEdit = async (id) => {
    const editData = data.find((val) => val.id === id);
    setProducts(editData);
    setEditId(id);
  };

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleQtyChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + change } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="main-container d-flex">
      {!isCartPage && !isHome && <Aside />}
      <div className="flex-grow-1 overflow-auto w-100">
        <Routes>
          <Route path='/' element={<Home handleLogin={handleLogin}/>} />
          <Route
            path="/ProductList"
            element={
              <ProductList
                data={data}
                Products={Products}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                category={category}
                imageRef={imageRef}
              />
            }
          />
          <Route
            path="/ProductCard"
            element={
              <ProductCard
                data={data}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Card
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                data={data}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/CartPage"
            element={
              <CartPage
                handleQtyChange={handleQtyChange}
                cartItems={cartItems}
              
              />
            }
          />
        </Routes>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
