import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://calm-mountain-10484-296975bbfc99.herokuapp.com/carts', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setItems(response.data);
    })
    .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleRemove = (itemId) => {
    axios.delete(`https://calm-mountain-10484-296975bbfc99.herokuapp.com/carts/${itemId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => {
      setItems(items.filter(item => item.id !== itemId));
    })
    .catch(error => console.error('Error removing item:', error));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
