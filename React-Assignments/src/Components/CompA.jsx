import React from 'react'
import { CompB } from './CompB'

export function CompA(props){
    console.log('In A',props.num)
  return (
    <div>
    <h2>CompA</h2>
    <CompB num={props.num}/>
    </div>
  )
}
