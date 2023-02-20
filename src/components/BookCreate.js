import { useState } from "react";
import useBooksContext from "../hooks/user-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext();
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        title !== "" ? createBook(title) && setTitle('') : alert("Title cant be empty, eg: Harry Potter");
    }
    // useEffect(() => {
    //       const element = document.getElementById("ref")
    //     element.lastElementChild.scrollIntoView({
    //       behavior: "smooth",
    //     });
    //   }, [title]);
    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input placeholder="Add Book" className="input" value={title} onChange={handleChange}/>
            <button className="button" >Submit</button>
        </form>
    </div>
    
}

export default BookCreate