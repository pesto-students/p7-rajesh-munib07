import React, {useState, createContext} from 'react'
import Todo from './Components/Todo'
import FetchAPI from './Components/FetchAPI'
//import  { MapDemo } from './components/MapDemo'
//import  { MapComponent } from './components/MapComponent'

/* export function App() {
  return (
    <div>
        <Todo/>
    </div>
  )
}
 */

/* export function App() {
    return (
      <div>
          <FetchAPI/>
      </div>
    )
  }
 */

/* import { CompA } from './Components/CompA'
//props drilling, passing props to the child in a chain
//to resolve the chain i.e. A->C direct we use useContext

export const NumContext = createContext()
export function App() {
    const [num, setNum] = useState(10)

    return (
      <div>
          {/* <CompA num={num}/> }     props drilling 

          

      </div>
    )
  } */


//Assignment 1- FollowUp

import { BookList } from './Components/BookList'


export function App() {
    const [list, setList] = useState([
     { title: 'Book 1', author: 'Author 1', year: 2020 },
     { title: 'Book 2', author: 'Author 2', year: 2018 },
     { title: 'Book 3', author: 'Author 3', year: 2022 },
    ])

    return (
      <div>
          {<BookList list={list}/> }     

          

      </div>
    )
  }
