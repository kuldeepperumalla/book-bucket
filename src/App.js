import { useState } from "react";
import BookCreate from "./components/BookCreate"

function App(){
    const [books, setBooks] = useState([]);

    const createBook= (title) =>{
        console.log('this is the title of the book : ',title);
        const updatedBooks = [...books, title];
        setBooks(updatedBooks)
    }

    const renderedBooks =  books.map((book, i) => {
        return <li key={i}>{book}</li>
    })

    return (
      <div>
        <BookCreate onCreate={createBook} />
        <ul>
          <li>{renderedBooks} </li>
        </ul>
      </div>
    );
}
export default App