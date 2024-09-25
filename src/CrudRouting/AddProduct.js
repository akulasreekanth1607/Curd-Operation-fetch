import React, { useEffect, useState } from "react";
import { API } from "./consts";

const AddProduct = () => {
  const [formdata, setFormData] = useState({ name: "", price: "" });

  console.log("setform checking", formdata);
  // useEffect(()=>{
  const addProduct = () => {
    // },[formdata])
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    fetch(API, requestOptions)
      .then((Response) => Response.json())
      .then((result) => {
        setFormData(formdata);
       setFormData({ name: "", price: "" });
      });
  };
 
  return (
    <div>
      AddProduct
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct();
        }}
      >
        <input
          type="text" value={formdata.name}
          placeholder="enter name"
          onChange={(e) => {
            setFormData({ ...formdata, name: e.target.value });
          }}
        ></input>
        <input
          type="text" value={formdata.price}
          placeholder="enter price"
          onChange={(e) => {
            setFormData({ ...formdata, price: e.target.value });
          }}
        ></input>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
