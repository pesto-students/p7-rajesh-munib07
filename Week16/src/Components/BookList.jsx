import React from 'react'
import {Book} from './Book'

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
}


    /*Assignment1*/
    /* <div>{props.list.map((ls) => (<li key={ls.title}>{ls.title}  {ls.author}  {ls.year} </li>))}</div> /*Assignment1*/

    /*Assignment1 - Follow Up*/