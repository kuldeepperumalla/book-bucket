import BookShow from "./BookShow";
import '../index.css'

function BookList({msgRef, books, onDelete, onEdit}) {


  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
  });

  return (
    <div id="ref" className="book-list">
      {renderedBooks}
<div ref={msgRef} ></div>
    </div>
  );
}

export default BookList;
