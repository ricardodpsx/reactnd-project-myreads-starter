/**
 * Created by ricar on 11/14/2017.
 */
import React, {Component} from "react";
import BookShelfChanger from "./BookShelfChanger";

export default class Book extends Component {
    render() {
        const book = this.props.book;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{
                             width: 128, height: 193, backgroundImage: 'url("' + book.imageLinks.smallThumbnail + '")'
                         }}>
                    </div>
                    <BookShelfChanger book={book} onBookShelfChange={this.props.onBookShelfChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors && book.authors.map(
                        (author) => <div key={author}>{author}</div>
                    )}
                </div>
            </div>
        );
    }
}
