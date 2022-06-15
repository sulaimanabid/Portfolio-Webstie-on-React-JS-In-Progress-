import React from "react";
import "./App.css";
import Homepage from "./components/homepage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sulaiman Abid</title>
        
      </Helmet>
      <div>
        {" "}
        <Homepage />
      </div>
    </div>
  );
}

export default App;
