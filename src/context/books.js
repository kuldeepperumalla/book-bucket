import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:3001/books/");
      setBooks(res.data);
    };

const editBookById = async (id, newTitle) => {
  const request = await axios.put(`http://localhost:3001/books/${id}`, {
    title: newTitle,
  });
  const updatedBook = books.map((book) => {
    if (book.id === id) {
      return { ...book, ...request.data };
    }
    return book;
  });
  setBooks(updatedBook);
};

//   Delete Books
const deleteBooksById = async (id) => {
  await axios.delete(`http://localhost:3001/books/${id}`);
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  });
  setBooks(updatedBooks);
};
//   Create Books
const createBook = async (title) => {
  // axios request
  const response = await axios.post("http://localhost:3001/books", {
    title: title,
  });
  const updatedBooks = [...books, response.data];
  setBooks(updatedBooks);
};

const valueToShare = {
    books,
    deleteBooksById,
    editBookById,
    createBook,
    fetchBooks
};
    
    return (
        <BooksContext.Provider value={{valueToShare}}>
            {children}
        </BooksContext.Provider>
    )
}
export {Provider}
export default BooksContext;
