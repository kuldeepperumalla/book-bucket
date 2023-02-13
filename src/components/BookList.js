import BookShow from "./BookShow";
import { useEffect, useRef } from "react";

function BookList({ books }) {
  const msgEndRef = useRef(null);
  useEffect(() => {
    msgEndRef.current?.scrollIntoView();
  }, [books]);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className="book-list">
      {renderedBooks}
      <div ref={msgEndRef} />
    </div>
  );
}

export default BookList;
