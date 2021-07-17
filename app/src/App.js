import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Campaign from "./components/Campaign";

function App() {
  return (
    <div className="h-screen bg-gray-400">
      <div>{/* Heading  */}</div>
      {/* =================================== */}
        {/* Campaign */}
      <div>
        <Campaign/>
      </div>
    </div>
  );
}

export default App;
