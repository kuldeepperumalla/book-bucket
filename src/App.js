import { useEffect, useState, useRef} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
const fetchBooks = async() => {
  const res = await axios.get("http://localhost:3001/books/");
  setBooks(res.data)
}

useEffect(()=>{
  fetchBooks();
},[])

    const msgEndRef = useRef(null);
    useEffect(() => {
      msgEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, []);
//   Edit Book
const editBookById = async (id, newTitle) => {

  const request = await axios.put(`http://localhost:3001/books/${id}`, {title:newTitle});
    const updatedBook = books.map((book) => {
        if(book.id === id){
            return {...book, ...request.data}
        }
        return book;
    })
    setBooks(updatedBook)
}

//   Delete Books
const deleteBooksById = async (id) => {

   await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book)=>{
        return book.id !== id;
    });
    setBooks(updatedBooks);
}
//   Create Books
  const createBook = async(title) => {
    // axios request
    const response = await axios.post("http://localhost:3001/books", {
      title:title
    });
    const updatedBooks = [
      ...books, response.data
    ];
    setBooks(updatedBooks);

  };


  // const renderedBooks =  books.map((book, i) => {
  //     return <li key={i}> {book.title} {book.id}</li>
  // })

  return (
    <div className="app">
        <h1>Reading List</h1>
      <BookList onCreate ={createBook} onEdit={editBookById} books={books} onDelete={deleteBooksById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}
export default App;
