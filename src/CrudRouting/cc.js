import React, { useEffect,useRef } from 'react'
import { api } from '../constants';
import { useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const titleEl1 = useRef(null);
    const viewsEl1 = useRef(null);
const {id,title,views} = useParams()
    useEffect(()=>{
        titleEl1.current.value = title
        viewsEl1.current.value = views

    },[])
    const handleUpdateForm = (e) => {
        e.preventDefault();
        const inputObj = {
          title: titleEl1.current.value,
          views: viewsEl1.current.value,
        };
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputObj),
        };
        fetch(api+id, requestOptions)
          .then((res) => res.json())
          .then((result) => {
            titleEl1.current.value = "";
            viewsEl1.current.value = "";
            console.log(result);
            alert(`'${id}' is updated successfully`)
          });
      };
  return (
    <div className="insertform container">
    <form onSubmit={handleUpdateForm} className=" mb-3 mt-3">
      <div class="mb-3">
        <label for="title" class="form-label mt-3">
          Title
        </label>
        <input
          type="text"
          ref={titleEl1}
          class="form-control"
          id="title"
          aria-describedby="titleHelp"
        />
      </div>
      <div class="mb-3">
        <label for="views" class="form-label">
          views
        </label>
        <input
          type="number"
          ref={viewsEl1}
          class="form-control"
          id="views"
        />
      </div>

      <button type="submit" class="btn btn-primary mb-3">
        Update
      </button>
    </form>
  </div>

  )
}

export default UpdateProduct