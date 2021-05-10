import React, { Component } from 'react';
import Book from '../representational/Book';

class Booklist extends Component {
    constructor(props) {
        super(props);
        console.log("BookList constructor");
    }


    UNSAFE_componentDidMount() {
        console.log("BookList componentWillMount")
    }

    componentWillMount() {
        console.log("BookList componentDidMount!")
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("U BookList componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U Booklist shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U BookList componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("U Booklist componentDidUpdate");
    }

    render() {
        console.log("Booklist render");
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.ChangeWithInputState(event, index)}
                    />
                );
            })

        );
    }

}

export default Booklist;