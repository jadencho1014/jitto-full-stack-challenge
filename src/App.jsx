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
      <h2>How to use the Bar Chart component:</h2>
      <ol>
        <li>Import the BarChart component from './BarChart'.</li>
        <li>Pass your data and labels as props to the BarChart component.</li>
        <li>Render the BarChart component within your application.</li>
      </ol>
    </div>
  );
}

export default App;
