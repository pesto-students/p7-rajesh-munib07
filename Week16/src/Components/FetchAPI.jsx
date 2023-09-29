//use Effect Demo
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FetchAPI = () => {
  const [index, setIndex] = useState(1)
  const [data, setData] = useState(
    {
        id: 1,
        name: 'Test',

    }
  )

  useEffect(() => {
    async function getData(){
        
        try{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            setData(data.slice(0,index)[index-1])
            //console.log(data.slice(0,index)[index-1])
      
        } catch(err){
            console.log('err', err)
        }

    }
    getData()
    }, [index])
  
    const callApi = () => {
        console.log('In call api counter')
        setIndex(x=>x+1)
    }

    console.log(index)

 

  return (
    <div>
        {/* <h2>{data && data.id}  {data && data.name} </h2> */} {/* same as next line */}
        {/* <h2>{data?.id}  {data && data.name} </h2> */}
        <h2>{data.id}  {data.name} </h2> 
        <h1>Call Api - {index}</h1>

        <button onClick={callApi}>CallAPI</button>
    </div>
  )
}

export default FetchAPI
