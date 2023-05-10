import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h1 className="text-7xl text-center text-purple-700">Coffee Making</h1>
      <p>
        Total Coffee :{" "}
        <span className="underline font-semibold">{coffees.length}</span>
      </p>
    </div>
  );
};

export default Home;
