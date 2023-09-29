import React, {useState, createContext} from 'react'
import Todo from './Components/Todo'
import FetchAPI from './Components/FetchAPI'
//import  { MapDemo } from './components/MapDemo'
//import  { MapComponent } from './components/MapComponent'

// Assigment - Todo list
/* export function App() {
  return (
    <div>
        <Todo/>
    </div>
  )
}
 */

// Assigment - Api call  
/* export function App() {
    return (
      <div>
          <FetchAPI/>
      </div>
    )
  }
 */


// Assigment - useContext  

//1. Props drilling, passing props to the child in a chain
//2. useContext: To resolve the chain i.e. A->C direct we use useContext

//1.Props Drilling
/* export function App() {
    const [num, setNum] = useState(10)
    return (
      <div> 
        { <CompA num={num}/> }     
      </div>
    
    )
  } */

  //2. useContext
/* import { CompC } from './Components/CompC'
export const NumContext = createContext()

export function App() {
  const [num, setNum] = useState(1)

  const addNum = () => {
    setNum(x=>x+1)
  }
  return (
    <div> 
      <NumContext.Provider value={num}>
      <CompC/>
      </NumContext.Provider>
      <br></br>
      <h3>
      <button onClick={addNum}>Increment</button>
      </h3>
    </div>
  )
}  */


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
