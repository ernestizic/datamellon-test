import React from "react";
import { Pie } from "react-chartjs-2";

const Piechart = ({ chartData }) => {
  return (
    <div className='piechart'>
      <h4 style={{textAlign: 'center', paddingBottom: '20px'}}>Piechart</h4>
      <Pie
        data={chartData}
        options={{}}
      />
    </div>
  );
};

export default Piechart;
