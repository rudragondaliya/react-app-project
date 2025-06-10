
---

React E-Commerce App

A modern, full-featured e-commerce web application built using React, React Router, Axios, and Bootstrap. This app supports product management, cart functionality, and a sleek UI, making it ideal for online stores or React development practice.

Live Preview

Visit the live application here:
[https://react-app-project-delta.vercel.app/](https://react-app-project-delta.vercel.app/)

---

Features

* Product Listing: Add, update, and delete products with image previews
* Category Filtering: Assign and view products by category
* Shopping Cart: Add to cart, change quantity, and remove items
* Toast Notifications: Smooth user feedback via React Toastify
* Data Handling: Uses mock backend with Axios and json-server
* Routing: Multi-page navigation with React Router
* Image Upload: Preview product images using FileReader

---

Tech Stack

* Frontend: React, Bootstrap
* Routing: React Router DOM
* Notifications: React Toastify
* Data Fetching: Axios
* Backend (mock): json-server

---

Getting Started

Prerequisites:

* Node.js and npm installed
* Git installed

Steps to Run Locally:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/react-ecommerce-app.git
   cd react-ecommerce-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run mock backend using json-server (optional, for local development):

   ```
   npx json-server --watch db.json --port 3000
   ```

4. Start the React app:

   ```
   npm start
   ```

---

**Available Routes**

| Route          | Description                 |
| -------------- | --------------------------- |
| `/`            | Home / Login Page           |
| `/ProductList` | Form to Add/Update Products |
| `/ProductCard` | Displays Product Cards      |
| `/cart`        | Add to Cart Page            |
| `/CartPage`    | Final Cart / Checkout View  |

---

**Project Structure**

```
src/
│
├── components/
│   ├── Aside.jsx
│   ├── Card.jsx
│   ├── CartPage.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── index.js
```

---

**License**

This project is licensed under the MIT License.

---

