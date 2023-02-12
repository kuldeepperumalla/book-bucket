import { useState } from "react";
import BookCreate from "./components/BookCreate"

function App(){
    const [books, setBooks] = useState([]);

    const createBook= (title) =>{
        console.log('this is the title of the book : ',title);
    }

    return <div>
        <BookCreate onCreate={createBook} />
    </div>
}
export default App