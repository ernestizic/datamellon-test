import React from "react";
import { Bar } from "react-chartjs-2";

const Barchart = ({chartData}) => {
  return (
    <div className='barchart' style={{maxWidth: '100%'}}>
      <Bar
        data={chartData}
        options={{  }}
      />
    </div>
  );
};

export default Barchart;