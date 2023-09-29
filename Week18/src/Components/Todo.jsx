import React, {useState} from 'react'

const Todo = () => {

    const [items, setItems] = useState([
     "Todo1","Todo2"
    ]);
    const addTodo = () => {
        const len = items.length + 1
        //setItems(items.push('Todo3'))  //faulty , as push doesn't return Array
        setItems((items) => {
          items = [...items, ['Todo'+len]]
          //items.push('Todo'+len);   //faulty : not changing the state
          return items;
        })
        console.log(len)
    }

    const delTodo = () => {
      const len = items.length - 1
      setItems(items.slice(0,len)) //Ok, as slice returns Array
      console.log(len)
  }

  

  return (
    <div>
    {items.map((num, index) => ( <h2 key={index}>Number = {num}</h2> ) )}
    <button onClick={addTodo}>Add</button>
    <button onClick={delTodo}>Delete</button>
    </div>

  )
}

export default Todo
