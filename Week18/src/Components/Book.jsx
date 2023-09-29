import React from 'react'

/* export const Book = (props) => {
    const {title,author,year} = props.book;
    
  return (
    <div key={title}>
     <h3>{title}</h3>
     <p>Author: {author}</p>
     <p>Year: {year}</p>
   </div>
  )
}
 */

/* Pure Component : render will happen only on state change*/

export class Book extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      counter: 0,
    }
  }

  componentDidMount(){
    setInterval(() => {
      console.log("Interval Invoked")
      this.setState({
        counter: 0
      })

    }, 1000)
  }

  render(){
    //debugger;
    const {title,author,year} = this.props.book;
    console.log("Render Invoked")
    return (
      <div>
        <h1>
          {/* Current Counter: {this.state.counter} */}
        </h1>
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
      </div>
    )
  }
}