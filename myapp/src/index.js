import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
    return <section>
        <Book/>
    </section>;
};


const Book = () => {
    return <article>
        <Image />
        <Title/>
        <Author />
        
    </article>
}


const Author = () => {
    return <h1>Author</h1>;
};
const Title = () => {
    return <h2>Book Title</h2>;
};
const Image = () => {
    return <h3>Image Placeholder</h3>;
};


const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return (
        <div>
            <h3>This is my message</h3>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

