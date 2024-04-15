import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BooksList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data);
        setFilteredBooks(response.data); // Initialize filteredBooks with all books
        console.log(response.data)
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    if(!books) return 
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm, books]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Books</h1>
      <input 
        type="text" 
        placeholder="Search books by title..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
