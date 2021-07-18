import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Campaign from "./components/Campaign";

function App() {
  return (
    <div className="h-screen">
        {/* Heading  */}
      <div className="grid justify-center pt-10 text-4xl h-44">
        <h1>PLUGS</h1>
      </div>
      {/* =================================== */}
        {/* Campaign */}
      <div>
        <Campaign/>
      </div>
    </div>
  );
}

export default App;
