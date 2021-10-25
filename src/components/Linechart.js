import React from "react";
import { Line } from "react-chartjs-2";

const Linechart = ({linechartdata}) => {
  return (
    <div style={styles}>
      <h4 style={{textAlign: 'center', padding: '20px'}}>Time series</h4>
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
