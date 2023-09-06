import React from 'react'

export const Book = (props) => {
    const {title,author,year} = props.book;
    
  return (
    <div key={title}>
     <h3>{title}</h3>
     <p>Author: {author}</p>
     <p>Year: {year}</p>
   </div>
  )
}
