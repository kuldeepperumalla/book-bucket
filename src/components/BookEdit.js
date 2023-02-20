import { useState } from "react";
import useBooksContext from "../hooks/user-books-context";
function BookEdit({book, onSubmit}){

    const [title, setTitle] = useState(book.title);
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const {editBookById} = useBooksContext();

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