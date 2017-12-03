import React from "react";
import "./App.css";
import BookSearch from "./BookSearch";
import BookList from "./BookList.js";
import {Route} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
    state = {};

    componentDidMount() {
        BooksAPI.getAll().then(function (books) {
            this.setState(this.index(books))
        }.bind(this));
    }

    index(books) {
        return books.reduce((group, book) => {
            group[book.id] = book;
            return group;
        }, {});
    }

    handleBookShelfChange(book, shelf) {
        BooksAPI.update(book, shelf);
        this.setState({[book.id]: {...book, "shelf": shelf}});
    }

    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <BookSearch
                        booksInShelf={this.state}
                        onBookShelfChange={this.handleBookShelfChange.bind(this)}
                    />
                )}/>
                <Route exact path='/' render={() => (
                    <BookList
                        books={this.state}
                        onBookShelfChange={this.handleBookShelfChange.bind(this)}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
