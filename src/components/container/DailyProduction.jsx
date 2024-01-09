import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "../Home.css";

export const DailyProduction = () => {
  const [tooltipData, setTooltipData] = useState(null);

  const data = [
    { day: "19 Jan", production: 248 },
    { day: "20 Jan", production: 400 },
    { day: "21 Jan", production: 300 },
    { day: "22 Jan", production: 600 },
    { day: "23 Jan", production: 800 },
    { day: "24 Jan", production: 500 },
    { day: "25 Jan", production: 700 },
  ];

  const handleTooltip = (event) => {
    if (event.active && event.payload && event.payload[0]) {
      setTooltipData({
        x: event.payload[0].payload.day,
        y: event.payload[0].payload.production,
      });
    } else {
      setTooltipData(null);
    }
  };

  return (
    <div className="main-div main-div-bgcolor">
      <div className="productiondetails-container">
        {/* Header */}
        <div className="productiondetails-header">
          <div className="productiondetails-title">
            Daily Dumping Details
          </div>
          {/* Dropdown */}
          <select className="productiondetails-dropdown">
            {/* Add your months as options */}
            <option value="january">January</option>
            <option value="february">February</option>
            {/* Add more months as needed */}
          </select>
        </div>

        {/* Line Chart */}
        <div className="productiondetails-chart-container">
          <LineChart
            width={700}
            height={270}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            onMouseMove={handleTooltip}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e0",
                borderRadius: "4px",
              }}
            />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="production" stroke="#4299e1" />
          </LineChart>

          {/* Tooltip */}
          {tooltipData && (
            <div
              className="productiondetails-tooltip"
              style={{ left: tooltipData.x, top: tooltipData.y }}
            >
              {tooltipData.x}: {tooltipData.y} units
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
