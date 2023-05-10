import React from "react";

const CoffeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="m-2 p-2">
      <div className="card card-side bg-base-100 shadow-xl">
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
              <button className="btn">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
