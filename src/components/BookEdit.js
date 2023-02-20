import { useState, useContext } from "react";
import BooksContext from "../context/books";
function BookEdit({book, onSubmit}){

    const [title, setTitle] = useState(book.title);
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const {editBookById} = useContext(BooksContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }
    return <form className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary" onClick={handleSubmit}>save</button>
    </form>
}

export default BookEdit