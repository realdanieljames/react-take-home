import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Campaign from "./components/Campaign";

function App() {
  return (
    <div className="h-screen bg-gray-400">
        {/* Heading  */}
      <div className="grid justify-center p-5">
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
