import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
    {
        title: "Interesting Facts For Curious Minds",
        author: "Jordan Moore",
        image: "./images/book1.jpg",
    },

    {
        title: "Atomic Habits",
        author: "James Clear",
        image: "./images/book1.jpg",
    },
];

const BookList = () => {
    return (
        <section className="book-list">
            {books.map((book) => {
                const { title, author, image } = book;
                return (
                    <Book img={image} author = {author} title={title} />
                );
            })}
        </section>
    );
};

const Book = (props) => {
    const { img, author, title } = props;
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>

            <h1>{author.toUpperCase()}</h1>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
