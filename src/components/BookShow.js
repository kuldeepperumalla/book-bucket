import { forwardRef, useState, useContext} from "react";
import BooksContext from "../context/books";
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit},ref){

    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () =>{
        deleteBookById(book.id);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>

    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

return (
  <div className="book-show">
    <img
      alt="bookimages"
      src={`https://picsum.photos/seed/${book.id}/300/200
`}
    />
    <div>{content}</div>
    <div ref={ref}></div>
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        delete
      </button>
    </div>
  </div>
);
}

export default forwardRef(BookShow)