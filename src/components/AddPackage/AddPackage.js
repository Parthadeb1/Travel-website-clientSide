import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        axios.post('https://damp-tundra-35888.herokuapp.com/packages',data)
        .then(res=> {
            if (res.data.insertedId){
                alert("Added succesfully");
                reset();
            }
        })
    };
    return (
    <div className="container mt-5">

        <div className=" d-flestify-content-center align-items-center">
            <h1 className="text-center text-primary">Add a package</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
            <div className="mb-3">
            <input {...register("Name", { required: true, maxLength: 30 })}
              type="text"
              className="form-control p-3"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-2">
            <textarea {...register("description")}
              type="text"
              className="form-control p-3"
              placeholder="description"
            />
           </div>
          <div className="mb-2">
            <input {...register("duration")}
              className="form-control p-3"
              placeholder="Duration"
            />
           </div>
          <div className="mb-2">
            <input {...register("img")}
              className="form-control p-3"
              placeholder="image"
            />
           </div>
          <div className="mb-2">
            <input {...register("price")}
              type="number"
              className="form-control p-3"
              placeholder="price"
            />
           </div>
          <div className="mb-2">
            <input 
                type="submit"
              className="form-control p-2 text-black fw-bold fs-5 bg-warning"
            />
           </div>

            </form>
        </div>
    </div>
    );
};

export default AddPackage;