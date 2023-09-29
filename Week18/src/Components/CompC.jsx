/* import React from 'react'

export function CompC(props){
    console.log('In C',props.num)
  return (
    <div>CompC = {props.num}</div>
  )
} */

import React, {useContext} from "react";
import { NumContext } from "../App.jsx";


export const CompC = () => {
  const data = useContext(NumContext)
  console.log(data)
  return (
    <div>CompC - {data}</div>
  )
}


