import React from "react";
import { Bar } from "react-chartjs-2";

const Barchart = ({chartData}) => {
  return (
    <div className='barchart'>
      <h4 style={{textAlign: 'center', paddingBottom: '20px'}}>Barchart</h4>
      <Bar
        data={chartData}
        options={{  }}
      />
    </div>
  );
};

export default Barchart;