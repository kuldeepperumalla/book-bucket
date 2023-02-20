import BookShow from "./BookShow";
import useBooksContext from "../hooks/user-books-context";
import '../index.css';
import {useEffect, useRef } from "react";



function BookList() {
  const {books} = useBooksContext();
  const msgEndRef = useRef(null);

    useEffect(() => {
      msgEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, [books]);

  const renderedBooks = books.map((book) => {
    return <BookShow ref={msgEndRef} key={book.id} book={book} />;
  });

  return (
    <div id="ref" className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
