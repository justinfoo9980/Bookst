import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>Welcome to My Bookstore</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/edit-profile">Edit Customer</Link>
          </li>
          <li>
            <Link to="/books">View Books</Link>
          </li>
          <li>
            <Link to="/cart">View Cart</Link>
          </li>
          <li>
            <Link to="/submit-order">Submit Order</Link>
          </li>
          <li>
            <Link to="/view-order">View Order</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
