import React, { useState, useEffect } from "react";
import "./BarChart.css";

interface BarChartProps {
  data: number[];
  labels?: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);

  useEffect(() => {
    const timeout = 100;

    data.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedBars((prev) => [...prev, true]);
      }, index * timeout);
    });
  }, [data]);

  const maxDataValue = Math.max(...data);

  return (
    <div className="bar-chart">
      {data.map((value, index) => (
        <div
          key={index}
          className={`bar ${hoveredBar === index ? "hovered" : ""} ${
            animatedBars[index] ? "animate" : ""
          }`}
          style={{
            height: animatedBars[index]
              ? `${(value / maxDataValue) * 100}%`
              : 0,
          }}
          onMouseEnter={() => setHoveredBar(index)}
          onMouseLeave={() => setHoveredBar(null)}
        >
          {labels && <span className="bar-label">{labels[index]}</span>}
          {hoveredBar === index && <span className="bar-value">{value}</span>}
        </div>
      ))}
    </div>
  );
};

export default BarChart;
