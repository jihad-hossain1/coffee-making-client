import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";

const Home = () => {
  const loaddedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaddedCoffees);
  return (
    <div>
      <h1 className="text-7xl text-center text-purple-700">Coffee Making</h1>
      <p>
        Total Coffee :{" "}
        <span className="underline font-semibold">{coffees.length}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-2">
        {coffees.map((coffee) => (
          <CoffeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
