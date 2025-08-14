import React from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card  username="hitesh" />
      <br></br>
      <h1 className="bg-green-500 text-black rounded-xl font-bold ">
        Hello from tailwind
      </h1>
      <br></br>
      <Card  username="Sandeep" btnText="visit me  "/>
    </>
  );
}

export default App;
