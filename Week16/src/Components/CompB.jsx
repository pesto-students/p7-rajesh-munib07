import React from 'react'
import { CompC } from './CompC'  //Use it while props drilling, but not with useContext
export function CompB(props) {
    console.log('In B',props.num)
  return (
    <div>
    <h3>CompB </h3>
    <CompC num={props.num}/>
    </div>
  )
}
