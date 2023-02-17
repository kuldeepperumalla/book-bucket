import BookShow from "./BookShow";
import '../index.css'

function BookList({ books, onDelete, onEdit}) {


  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
  });

  return (
    <div className="book-list">
      {renderedBooks}
      <div />
      <div id="ref"></div>
    </div>
  );
}

export default BookList;
