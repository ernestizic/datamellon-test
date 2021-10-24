import React from "react";
import { Pie } from "react-chartjs-2";

const Piechart = ({ chartData }) => {
  return (
    <div className='piechart'>
      <Pie
        data={chartData}
        options={{}}
      />
    </div>
  );
};

export default Piechart;
