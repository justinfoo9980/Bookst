import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewOrder({ orderId }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`https://calm-mountain-10484-296975bbfc99.herokuapp.com/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setOrder(response.data);
    })
    .catch(error => console.error('Error fetching order details:', error));
  }, [orderId]);

  if (!order) return <p>Loading order details...</p>;

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
}

export default ViewOrder;
