import React from "react";
import { Line } from "react-chartjs-2";

const Linechart = ({linechartdata}) => {
  return (
    <div style={styles}>
      <Line 
        data={linechartdata} 
        options={lineOptions} 
    />
    </div>
  );
};

const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
  
    tooltips: {
      mode: "x",
      intersect: false
    },
  
    scales: {
      xAxes: [
        {
          parsing: false,
          type: "time",
          time: {
            unit: "hours"
          }
        }
      ]
    }
  };

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default Linechart;
