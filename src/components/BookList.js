import BookShow from "./BookShow";
import '../index.css';
import { useEffect, useRef} from "react";
function BookList({books, onDelete, onEdit}) {

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
      {renderedBooks}
    </div>
  );
}

export default BookList;
