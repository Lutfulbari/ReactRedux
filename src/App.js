import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


class App extends Component {
  state = {
    books: [
      { bookName: "1994", writer: "Gerge Orwell" },
      { bookName: "The DA Vinci Code", writer: "Dan Brown" },
      { bookName: "THE Alchemist", writer: "Paulo coelho" },
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

  ChangeWithInputState = event => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "Gerge Orwell" },
        { bookName: "The DA Vinci Code", writer: "Dan Brown" },
        { bookName: "MUSA", writer: "lutful bati" },
      ]
    });
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
