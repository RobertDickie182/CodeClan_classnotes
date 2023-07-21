import React, { useState } from 'react';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { title: 'Clean Code', author: 'Robert Martin' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { title: 'Refactoring', author: 'Martin Fowler' },
  ]);

  function removeBook(bookToRemove) {
    const updatedBooks = books.filter(book => book !== bookToRemove);
    setBooks(updatedBooks);
  }

  return (
    <div id="grid-container">
        <header>
            <h1>CC Library</h1>
        </header>
        <main>
            <section>
                <h1>CCL - The CodeClan Library</h1>
                <h2>Books</h2>
                <BookList books={books} onRemoveButtonClick={removeBook} />
            </section>
        </main>
        <footer>CodeClan Library &copy; 2023</footer>
    </div>
  );
}

export default App;
