import React, { useEffect, useState } from 'react'

const Crud = () => {
  const[data,setData]=useState([])
  const[inputdata,setInputdata]=useState({name:'',price:''})
  
 useEffect(()=>{
     getApi();
          },[])
          
const getApi=()=>{ fetch('http://localhost:5000/products')
          .then(response => response.json())
           .then(result => setData(result))
          }
  const handleSubmit = (e) => {
            e.preventDefault(); 
   const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(inputdata),
            };
            fetch("http://localhost:5000/products", requestOptions)
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              getApi();
              setInputdata({
                name: "",
                price: "",
              });
            });
        };
    return (
    <div>
      <form onSubmit={handleSubmit}>
      <input  type='text' value={inputdata.name} onChange={(e)=>{
        setInputdata({...inputdata,name:e.target.value} )
      }}></input>
      <input type='text' value={inputdata.price} onChange={(e)=>{
        setInputdata({...inputdata,price:e.target.value})
      }} ></input>
      <input type='submit'></input>
      </form>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((post,i)=>{
              return<tr key={i}>
                <td>{i+1}</td>
                <td>{post.name}</td>
                <td>{post.product}</td>
                <td>{post.price}</td>
                <td><button className='btn btn-primary'>edit</button>
                <button className='btn btn-danger'>delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Crud