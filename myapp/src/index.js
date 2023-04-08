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
        image: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
];

const BookList = () => {
    return (
        <section className="book-list">
            <EventExamples />
            {books.map((book, index) => {
                const { title, author, image } = book;
                return <Book book={book} key={index} />;
            })}
        </section>
    );
};

const EventExamples = () => {
    const handleFormInput = () => {
        console.log("Handle form input!");
    };

    const handleButtonClick = () => {
        alert("Handle form input!");
    };

    const handleFormSubmission = () => {
        alert("Handle Form Submission");
    };
    return (
        <section>
            <form action="" onSubmit={handleFormSubmission}>
                <h2>Typical form</h2>
                <input
                    type="text"
                    name="example"
                    id=""
                    onChange={handleFormInput}
                    style={{ margin: "1rem 0" }}
                />
            </form>
            <button onClick={handleButtonClick}>Click here</button>
        </section>
    );
};

const Book = (props) => {
    const { image, author, title } = props.book;
    return (
        <article className="book">
            <img src={image} alt={title} />
            <h2>{title}</h2>

            <h1>{author}</h1>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
