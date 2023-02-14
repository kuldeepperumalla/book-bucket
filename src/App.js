import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

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
      <BookList books={books} onDelete={deleteBooksById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}
export default App;
