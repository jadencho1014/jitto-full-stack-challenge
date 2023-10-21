import React from "react";
import BarChart from "./BarChart.tsx";
import "./App.css";

function App() {
  const data = [45, 85, 32, 90];
  const labels = ["Jan", "Feb", "Mar", "Apr"];

  return (
    <div className="App">
      <h1>Bar Chart</h1>
      <BarChart data={data} labels={labels} />
    </div>
  );
}

export default App;
