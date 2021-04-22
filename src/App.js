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
    otherProp: "I am some other prop"
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

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };
    console.log(this.state);
    return (
      <div className="App">
        <h1 style={style}>Book list</h1>
        <button onClick={() => this.changeBookState("Ninteen Eighty-Four")}>Change state</button>
        <input type="text" onChange={this.ChangeWithInputState} />
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} inputName={this.ChangeWithInputState} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, "Ninteen 84")} />
      </div>
    );
  }
}


export default App;
