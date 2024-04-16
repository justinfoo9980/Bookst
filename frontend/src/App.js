import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import EditCustomer from "./Components/EditCustomer";
import BooksList from "./Components/BooksList/BooksList";
import Cart from "./Components/Cart";
import SubmitOrder from "./Components/SubmitOrder";
import ViewOrder from "./Components/ViewOrder";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";

function App() {
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<EditCustomer />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/submit-order" element={<SubmitOrder />} />
          <Route path="/view-order" element={<ViewOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
