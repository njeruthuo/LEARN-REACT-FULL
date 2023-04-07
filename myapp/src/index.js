import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title = "Interesting Facts For Curious Minds";
const author = "Jordan Moore";
const image = "./images/book1.jpg";

const BookList = () => {
    return (
        <section className="book-list">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
            <img src={image} alt={title} />
            <h2>{title}</h2>

            <h1>{author.toUpperCase()}</h1>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
