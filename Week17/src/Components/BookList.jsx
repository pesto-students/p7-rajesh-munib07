import React from 'react'
import {Book} from './Book'
import { BookDetails } from './BookDetail'
/*
export const BookList = (props) => {
    const books = props.list
    //console.log(books);
    //books.map((book) => (console.log(book.title)))
  return (

    <div>
        {
             books.map((book) => (<Book key={book.title} book={book}/>))
        }
    </div>

  )
} */


    /*Assignment1*/
    /* <div>{props.list.map((ls) => (<li key={ls.title}>{ls.title}  {ls.author}  {ls.year} </li>))}</div> /*Assignment1*/

    /*Assignment1 - Follow Up*/

/*Converting BookList to Class Component*/

import WithLogging from './WithLogging'

class BookList extends React.Component {

  render() {
    //console.log('In Booklist')
    //console.log(this.props.books)
    return(
      <div>
      <h3>{
        this.props.books.map((book) => (<Book key={book.title} book={book}/>))
      }
      </h3>

      <h2>{<BookDetails key={this.props.books[0].title} bookDetails={this.props.books[0]}/>}</h2>
      </div>
    )
  }
}

const NewBookList = WithLogging(BookList)

export default NewBookList