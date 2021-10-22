import React from "react";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

const Dashboard = ({ chartData, isLoading, salesData }) => {
  return (
    <div className='chart-list'>
      <header>
        <h2>Datamellon Test </h2>
      </header>
      <h5 style={{ textAlign: "center", padding: "20px" }}>
        Category of items with sales in the last 4 years
      </h5>

      {isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 bar'>
              <Barchart chartData={chartData} />
            </div>
            <div className='col-md-6 pie'>
              <Piechart chartData={chartData} />
            </div>
          </div>

          <div className='table-div'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Country</th>
                  <th>Category</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((item)=> (
                  <tr key={item['Order ID']}>
                    <td>{item['Row ID']}</td>
                    <td>{item.Country}</td>
                    <td>{item.Category}</td>
                    <td>{item['Product Name']}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
