import { useContext, useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books"
import BookList from "./components/BookList";

function App() {

  const {fetchBooks} = useContext(BooksContext);
  
      useEffect(() => {
        fetchBooks();
      }, []);
//   Edit Book


  // const renderedBooks =  books.map((book, i) => {
  //     return <li key={i}> {book.title} {book.id}</li>
  // })

  return (
    <div className="app">
        <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;
