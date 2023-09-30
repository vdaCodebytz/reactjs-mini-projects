import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

const books = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg",
    title: "A Tale Of Two Cities",
    author: "Charles Dickens",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/4/4a/And_Then_There_Were_None_First_Edition_Cover_1939.jpg",
    title: "And Then There Were None",
    author: "Agatha Christie",
  },
];

const Booklist = () => {
  const newBooks = books.map((book) => {
    return <Book {...book} key={book.title} />;
  });

  return <section className="booklist">{newBooks}</section>;
};

const Book = ({ img, title, author }) => {
  return (
    <div className="book">
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
