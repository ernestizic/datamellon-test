import React from "react";
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import Piechart from "./Piechart";

const Dashboard = ({
  chartData,
  isLoading,
  currentData,
  nextPage,
  prevPage,
  filterProducts,
  linechartdata
}) => {

  const handleChange = (e) => {
    filterProducts(e)
  };
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

          <div className='container linechart-div'>
            <Linechart linechartdata={linechartdata} />
          </div>

          <div className='table-div'>
            <div className='filter-div'>
              Filter By Category: {}
              <select
                name='products'
                onChange={(e) => handleChange(e.target.value)}
              >
                <option value='all'>All</option>
                <option value='Technology'>Technology</option>
                <option value='Furniture'>Furniture</option>
                <option value='Office Supplies'>Office Supplies</option>
              </select>
            </div>

            <table className='table table-striped'>
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
                {currentData.map((item) => (
                  <tr key={item["Order ID"]}>
                    <td>{item["Row ID"]}</td>
                    <td>{item.Country}</td>
                    <td>{item.Category}</td>
                    <td>{item["Product Name"]}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='buttons'>
              <button onClick={prevPage} className='prev'>
                Prev
              </button>
              <button onClick={nextPage} className='next'>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
