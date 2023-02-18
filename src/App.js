import React from "react";
import data from "./db.json";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home data={data} />
    </>
  );
}

export default App;
