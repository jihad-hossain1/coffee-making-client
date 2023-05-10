import React from "react";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("Delete Confirm!");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="m-2 p-2 border rounded-2xl">
      <div className="card card-side bg-base-100 shadow">
        <figure>
          <img src={photo} alt="Coffee" />
        </figure>
        <div className="flex justify-between items-center w-full pr-4">
          <div className="space-y-2">
            <h2 className="card-title">{name}</h2>
            <p className="text-sm">
              <span className="font-semibold mr-1">Qty:</span>
              {quantity}
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-1">Supplier:</span>
              {supplier}
            </p>
            <p className="text-sm">
              <span className="font-semibold mr-1">Taste:</span>
              {taste}
            </p>
          </div>
          <div className="card-actions justify-between ">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn">view</button>
              <button className="btn">edit</button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-orange-600"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
