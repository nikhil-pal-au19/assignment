import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
  const [data,setData]=useState({})
  useEffect(()=>{

    fetch("http://localhost:5000/movieservice").then(res=>res.json()).then((e)=>{
      console.log(e)
      setData(e)
    })
  },[])
  Axios.get().then((e)=>{
    console.log(e)
  })
  return (
    <div>
      <h1>from read page</h1>
      {
        data.length>0 && data.map((data)=>{
          <div>
            <p>{data.movie}</p>
            <p>{data.rating}</p>
            <p>{data.releaseDate}</p>
          </div>
        })
      }
    </div>
  )
}

export default Read