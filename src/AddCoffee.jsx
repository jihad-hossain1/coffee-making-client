import React from "react";
// import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // const name = form.name.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="underline text-center text-3xl font-semibold text-gray-700 py-8">
        add a Coffee
      </h2>
      <form onSubmit={handleAddCoffe}>
        {/* form name and row  */}
        <div className="mb-5 md:flex space-x-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered md:w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">
                Available Quantity
              </span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form suplier row  */}
        <div className="mb-5 md:flex space-x-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered md:w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Taste</span>
            </label>
            <label className="input-group">
              <input
                name="taste"
                type="text"
                placeholder="Taste"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form Category & details  */}
        <div className="mb-5 md:flex space-x-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered md:w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form Category & details  */}
        <div className="mb-5 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
        </div>
        {/* submit form  */}
        <div className="mb-5 ">
          <input type="submit" value="add coffee" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
