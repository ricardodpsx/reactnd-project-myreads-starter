/**
 * Created by ricar on 11/14/2017.
 */
import React, {Component} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import {Link} from "react-router-dom";


export default class BookSearch extends Component {

    state = {
        books: [],
        search: ""
    };

    handleBookShelfChange(book, shelf) {
        BooksAPI.update(book, shelf);
    }

    handleSearch(search) {
        this.setState({search})
        BooksAPI.search(search, 10).then(function (books) {
            if (!books.error)
                this.setState({books});
        }.bind(this));
    }

    render() {
        let that = this;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input type="text" placeholder="Search by title or author"
                               value={this.state.search}
                               onChange={(e)=>that.handleSearch(e.target.value) }/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) =>
                            <li key={book.id}>
                                <Book book={this.props.booksInShelf[book.id] || book}
                                      onBookShelfChange={this.props.onBookShelfChange.bind(this)}
                                />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}


