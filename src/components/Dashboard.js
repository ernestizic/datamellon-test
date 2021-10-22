import React from "react";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

const Dashboard = ({ chartData }) => {


  return (
    <div className='chart-list'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Barchart chartData={chartData} />
          </div>
          <div className='col-md-6'>
            <Piechart chartData={chartData} />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Dashboard;
