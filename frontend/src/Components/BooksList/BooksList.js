import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bookslist.css";
import image1 from "../../assets/book1.jpg";
import image2 from "../../assets/book2.jpg";
import image3 from "../../assets/book3.jpg";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://calm-mountain-10484-296975bbfc99.herokuapp.com/books")
      .then((response) => {
        setBooks(response.data);
        setFilteredBooks(response.data); // Initialize filteredBooks with all books
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  useEffect(() => {
    if (!books) return;
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm, books]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const addToCart = (bookID) => {
    console.log("Ädd book to cart:", bookID);
  };
  return (
    <div className="">
      <h1 className="background">View Books</h1>
      <input
        type="text"
        placeholder="Search books by title..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
      />
      <div className="bookContainer">
        {filteredBooks.map((book, index) => (
          // "image1" is book image (After db have image src, pust "book.src")
          <div className="eachBookContainer" key={index}>
            <img src={image3} alt={book.name} />
            <h4>{book.name}</h4>
            <p>Genre: {book.genre.name}</p>
            <p>Price: ${book.price}</p>
            <button onClick={() => addToCart(book._id)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
