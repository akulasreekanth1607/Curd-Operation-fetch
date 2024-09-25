import React, { useEffect, useRef, useState } from 'react'
import { API } from './consts'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const nameInput=useRef(null)
    const priceInput=useRef(null)

  const{id,name,price}=useParams()
  
  useEffect(()=>{
    nameInput.current.value=name
    priceInput.current.value=price
  },[])

      const handleupdatedata=(e)=>{
        e.preventDefault()
        const inputobj={
          name:nameInput.current.value,
          price:priceInput.current.value
        };
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputobj),
      }
        fetch(API+`/${id}`, requestOptions)
        .then((response)=>response.json())
        .then((result)=>{

          alert(`'${id}' is updated successfully`)

          nameInput.current.value=" "
          priceInput.current.value=" "
      //console.log("checkupdate data",result)

        })
      }
    
  return (
    <div>UpdateProduct
      <form onSubmit={handleupdatedata}>
      
        <input  ref={nameInput} type='text' id='name'></input>
  
        <input ref={priceInput} type='text' id='price'></input>
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateProduct