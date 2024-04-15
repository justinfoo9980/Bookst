import React from 'react';
import axios from 'axios';

function SubmitOrder() {
  const handleSubmitOrder = () => {
    axios.post('https://calm-mountain-10484-296975bbfc99.herokuapp.com/orders', {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      console.log('Order submitted successfully:', response.data);
      // Redirect to order confirmation page or handle next steps
    })
    .catch(error => console.error('Error submitting order:', error));
  };

  return (
    <div>
      <h1>Submit Order</h1>
      <button onClick={handleSubmitOrder}>Place Order</button>
    </div>
  );
}

export default SubmitOrder;
