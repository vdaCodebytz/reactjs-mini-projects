import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import books from "./books-data";

const handleClick = (event) => {
  console.log(event);
};

const Booklist = () => {
  const newBooks = books.map((book, index) => {
    return <Book {...book} key={book.id} index={index} />;
  });

  return (
    <>
      <h1 className="heading">Amazon Bestseller's</h1>
      <section className="booklist">{newBooks}</section>
    </>
  );
};

const Book = ({ img, title, author, index }) => {
  return (
    <div className="book">
      <p>{`#${index + 1}`}</p>
      <img src={img} alt="Cover" />
      <h1 className="title">{title}</h1>
      <h1 className="author">{author}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Booklist />
  </>
);
