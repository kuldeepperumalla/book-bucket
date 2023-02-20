import BookShow from "./BookShow";
import BooksContext from "../context/books";
import '../index.css';
import {useContext, useEffect, useRef} from "react";
function BookList({books, onDelete, onEdit}) {

  const {count, incrementCount} = useContext(BooksContext)
      const msgEndRef = useRef(null);
      useEffect(() => {
        msgEndRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, [books]);

  const renderedBooks = books.map((book) => {
    return <BookShow ref={msgEndRef} onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
  });

  return (
    <div id="ref" className="book-list">
      {count}
      <button onClick={incrementCount}>Click me!</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
