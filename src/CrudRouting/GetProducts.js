import React, { useEffect, useState } from 'react'
import { API } from './consts'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import { Link } from 'react-router-dom'

const GetProducts = () => {
  const[data,setData]=useState(null)
  const[message,setMessage]=useState('')
  const getProducts=()=>{
    fetch(API)
    .then(response=>response.json())
    .then(result=>setData(result))
  }
  useEffect(()=>{
    getProducts()
  },[])
  if(data==null){
    return<p>loading.. </p>
  }
  // console.log('getdata check',data)

  const deleteProduct=(id,name)=>{
    const requestOptions={
        method:"DELETE",
    };
    fetch(`${API}/${id}`, requestOptions) 
    // fetch(`API/${id}`,requestOptions)
    .then((response)=>response.json())
    .then((result)=>{
      console.log("deletedata check",result)
      getProducts()
      setMessage(`The ${name} product has been deleted.`); // Set the success message
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    })
}
  return (
    <div><p>{message}</p>
      <table border={1} className='table'>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
            {
              data.map((el,i)=>{
                return<tr key={i}>
                  <td>{i+1}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>
                    <Link to={`/update-product/${el.id}/${el.name}/${el.price}`}>
                    <button className='btn btn-primary'>Edit</button>
                  </Link>
                  <button className='btn btn-danger'onClick={()=>{
                    if(window.confirm("ru sure?")){
                      deleteProduct(el.id,el.name)
                    }
                      
                  }}>Delete</button></td>
                </tr>
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default GetProducts