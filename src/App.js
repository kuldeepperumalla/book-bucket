import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

//   Edit Book
const editBookById = (id, newTitle) => {
    const updatedBook = books.map((book) => {
        if(book.id === id){
            return {...book, title:newTitle}
        }
        return book;
    })
    setBooks(updatedBook)
}

//   Delete Books
const deleteBooksById = (id) => {
    const updatedBooks = books.filter((book)=>{
        return book.id !== id;
    });
    setBooks(updatedBooks);
}
//   Create Books
  const createBook = (title) => {
    const element = document.getElementById("book-app");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  // const renderedBooks =  books.map((book, i) => {
  //     return <li key={i}> {book.title} {book.id}</li>
  // })

  return (
    <div className="app">
        <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBooksById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}
export default App;
