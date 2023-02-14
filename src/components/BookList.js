import BookShow from "./BookShow";
import { useEffect, useRef } from "react";

function BookList({ books, onDelete, onEdit}) {
  const msgEndRef = useRef(null);
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [books]);
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
  });

  return (
    <div className="book-list">
      {renderedBooks}
      <div ref={msgEndRef} />
    </div>
  );
}

export default BookList;
