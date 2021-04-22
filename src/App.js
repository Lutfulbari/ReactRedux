import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


class App extends Component {
  state = {
    books: [
      { id: 1, bookName: "1994", writer: "Gerge Orwell" },
      { id: 2, bookName: "The DA Vinci Code", writer: "Dan Brown" },
      { id: 3, bookName: "THE Alchemist", writer: "Paulo coelho" },
    ],

  }

  changeBookState = newBookName => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "Gerge Orwell" },
        { bookName: "The DA Vinci Code", writer: "Dan Brown" },
        { bookName: "MUSA", writer: "lutful bati" },
      ]
    });
  }

  ChangeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;

    const books = [...this.state.books];
    books[index] = book;
    this.setState({ books: books });
  }

  deleteBookState = index => {
    // const books = this.state.books.slice();
    // const books = this.state.books.map(item => item);
    const books = [...this.state.books];

    books.splice(index, 1);
    this.setState({
      books: books
    });
  };

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };

    //const booksState = this.state.books;

    const books = this.state.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
          delete={() => this.deleteBookState(index)}
          key={book.id}
          inputName={(event) => this.ChangeWithInputState(event, index)}
        />
      );
    });

    // console.log(booksState);
    console.log(books);



    return (
      <div className="App">
        <h1 style={style}>Book list</h1>
        {books}
      </div>
    );
  }
}


export default App;
