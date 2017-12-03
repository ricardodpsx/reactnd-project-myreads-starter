/**
 * Created by ricardo.pacheco on 11/18/17.
 */

import React, {Component} from "react";

export default class BookShelfChanger extends Component {
    render() {
        var book = this.props.book;

        return (<div className="book-shelf-changer">
            <select value={book.shelf || "none"}
                    onChange={(event) => this.props.onBookShelfChange(book, event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>)
    }
}
