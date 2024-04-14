import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import EditCustomer from './Components/EditCustomer';
import BooksList from './Components/BooksList';
import Cart from './Components/Cart';
import SubmitOrder from './Components/SubmitOrder';
import ViewOrder from './Components/ViewOrder';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">User Profile</Link></li>
            <li><Link to="/edit-profile">Edit Customer</Link></li>
            <li><Link to="/books">View Books</Link></li>
            <li><Link to="/cart">View Cart</Link></li>
            <li><Link to="/submit-order">Submit Order</Link></li>
            <li><Link to="/view-order">View Order</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<EditCustomer />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/submit-order" element={<SubmitOrder />} />
          <Route path="/view-order" element={<ViewOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
