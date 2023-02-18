import { useState, useEffect } from "react";
function BookCreate({onCreate}) {

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        if((event.target.value)===""){
            alert("")
        }
        setTitle(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title)
        setTitle('');

    }
    useEffect(() => {
          const element = document.getElementById("ref")
        element.lastElementChild.scrollIntoView({
          behavior: "smooth",
        });
      }, [title]);
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