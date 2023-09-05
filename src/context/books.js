import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("https://book-bucket-server.onrender.com/books");

    setBooks(response.data);
  }, []);
  
  
  
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`https://book-bucket-server.onrender.com/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  //   Delete Books
  const deleteBookById = async (id) => {
    await axios.delete(`https://book-bucket-server.onrender.com/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  //   Create Books
  const createBook = async (title) => {
    // axios request
    const response = await axios.post("https://book-bucket-server.onrender.com/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={ valueToShare }>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
