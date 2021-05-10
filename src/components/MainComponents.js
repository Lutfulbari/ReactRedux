import React, { Component } from 'react';
import booklist from '../assets/books';
import Booklist from './lists/Booklist';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: booklist,
            showBooks: true
        }
        console.log("MainComponent constructor!");
    }


    state = {
        books: booklist,
        ShowBooks: true
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

    togglBooks = () => {
        this.setState({ ShowBooks: !this.state.ShowBooks });
    }

    UNSAFE_componentWillMount() {
        console.log("MainComponent componentWillMount!")
    }

    componentDidMount() {
        console.log("MainComponent componentWillMount")
    }
    render() {
        console.log("MainComponent render");
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        };

        //const booksState = this.state.books;

        let books = null;
        if (this.state.ShowBooks) {
            books = <Booklist
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                ChangeWithInputState={this.ChangeWithInputState}
            />

        }

        // console.log(booksState);
        console.log(books);



        return (
            <div className="App">
                <h1 style={style}>Book list</h1>
                <button onClick={this.togglBooks}>Toggle Books</button>
                {books}
            </div>
        );
    }

}

export default MainComponent;