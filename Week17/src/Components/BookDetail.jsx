import React from 'react'

export const BookDetails = (props) => {
    const {title,author,year} = props.bookDetails;
    
  return (
    <div key={title}>
     <h3>{title} - Details</h3>
     <p>Author: {author}</p>
     <p>Year: {year}</p>
   </div>
  )
}
