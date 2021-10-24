import React from "react";
import { Line } from "react-chartjs-2";

const Linechart = ({linechartdata}) => {
  return (
    <div style={styles}>
      <Line 
        data={linechartdata} 
        options={{}} 
    />
    </div>
  );
};


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default Linechart;
