import React from "react";
import { Bar } from "react-chartjs-2";

const CompositeBarchart = ({salesData}) => {

    const lab = salesData.map(sales => sales['Order Date'])
  
    const officeSupplies = salesData.filter((sales) => sales.Category === 'Office Supplies');
    const technology = salesData.filter((sales) => sales.Category === 'Technology');
    const furniture = salesData.filter((sales) => sales.Category === 'Furniture');

    const off = officeSupplies.map(data => data.Sales)
    const tech = technology.map(data => data.Sales)
    const fur = furniture.map(data => data.Sales)



  return (
    <div className='comp-barchart'>
      <h4 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Composite Barchart
      </h4>
      <Bar
        data={{
          labels: lab,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Technology",
              backgroundColor: "#6ED3FF",
              barThickness: 40,
              categoryPercentage: 1,
              data: tech, //From API
            },
            {
              label: "Office Supplies",
              backgroundColor: "#1497FF",
              barThickness: 40,
              categoryPercentage: 1,
              data: off, //From API
            },
            {
              label: "Furniture",
              backgroundColor: "#6a5acd",
              barThickness: 40,
              categoryPercentage: 1,
              data: fur, //From API
            },
          ],
        }}
        height={220}
        options={{
            plugins: {
                title: {
                  display: true,
                  text: 'Chart.js Bar Chart - Stacked'
                },
              },
              responsive: true,
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true
                }
              }
        }}
      />
    </div>
  );
};

export default CompositeBarchart;
