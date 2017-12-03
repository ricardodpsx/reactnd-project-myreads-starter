/**
 * Created by ricar on 11/14/2017.
 */
import React, {Component} from "react";
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";


export default class BookList extends Component {

    shelfTitles = {
        'currentlyReading': 'Currently Reading',
        'wantToRead': 'Want To Read',
        'read': "Read",
        'others': "Others"
    };

    booksGroupedByShelf(books) {
        return Object.values(books).reduce(function (group, book) {
            const shelf = book.shelf || "others";
            if (!group[shelf])
                group[shelf] = [];
            group[shelf].push(book);
            return group;
        }, {});
    }

    render() {
        const booksByShelf = this.booksGroupedByShelf(this.props.books);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {Object.keys(booksByShelf).filter((keys) => keys != 'none').map((shelfKey) =>
                        <div key={shelfKey}>
                            <BookShelf books={booksByShelf[shelfKey] || []}
                                       name={this.shelfTitles[shelfKey]}
                                       onBookShelfChange={this.props.onBookShelfChange}/>
                        </div>)
                    }
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>);
    }
}


