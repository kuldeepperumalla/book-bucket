import { forwardRef, useState} from "react";
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit},ref){

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () =>{
        onDelete(book.id);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>

    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book = {book}/>
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