/**
 * Created by ricar on 11/14/2017.
 */

import React, {Component} from "react";
import Book from "./Book";


export default class BookShelf extends Component {
    render() {
        return (<div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {Object.values(this.props.books).map((book) =>
                        <li key={book.id}>
                            <Book book={book}
                                  onBookShelfChange={this.props.onBookShelfChange}
                            />
                        </li>
                    )}
                </ol>
            </div>
        </div>)
    }
}

