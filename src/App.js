import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [salesData, setSalesData] = useState([]);
  const [salesDataCopy, setSalesDataCopy] = useState([]);
  // const [chartData, setChartData] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);


  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstdata = indexOfLastData - dataPerPage;
  const currentData = salesDataCopy.slice(indexOfFirstdata, indexOfLastData);


  const nextPage = () => {
    if (currentData.length < dataPerPage) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  };

  const filterProducts =(cat)=> {
    if(cat === 'all') {
      setSalesDataCopy(salesData)
    } else{
      setSalesDataCopy([...salesData.filter(data => data.Category === cat)]) 
    }
  }

  // sort by profit in asc and desc order
  const sortasc =()=> {
    setSalesDataCopy([...salesDataCopy.sort((a, b)=> a.Profit - b.Profit)])
  }
  const sortdec =()=> {
    setSalesDataCopy([...salesDataCopy.sort((a, b)=> b.Profit - a.Profit)])
  }

  // sort by year in asc and desc order
  const sortYearAsc =()=> {
    setSalesDataCopy([...salesDataCopy.sort((a, b)=> new Date(a['Order Date']) - new Date(b['Order Date']) )])
  }
  const sortYearDec =()=> {
    setSalesDataCopy([...salesDataCopy.sort((a, b)=> new Date(b['Order Date']) - new Date(a['Order Date']) )])
  }



  const fur = salesData.filter((sales) => sales.Category === "Furniture");
  const furLen = fur.length;

  const off = salesData.filter((sales) => sales.Category === "Office Supplies");
  const offLen = off.length;

  const tech = salesData.filter((sales) => sales.Category === "Technology");
  const techLen = tech.length;


  const myData = salesData.map(sales => {
    return {x: sales['Order Date'], y: sales['Profit']}
  }).sort((a, b)=> new Date(a.x) - new Date(b.x) )
  console.log(salesData)

  ///////////// useEffect  /////////////////////
  useEffect(() => {
    fetchSalesData();
  }, []);

  useEffect(() => {
    setSalesDataCopy(salesData)
  }, [salesData])
  
// ///////////////////////////////////////////////////


///////////////////////// Fetching data from API  //////////

const fetchSalesData = async () => {
  const res = await fetch(
    "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ angular_test: "angular-developer" }),
    }
  );
  const data = await res.json();
  setSalesData(data);
  setIsLoading(false);
};
////////////////////////////////////////////////////////


const chartData = {
  labels: ["Office Supplies", "Technology", "Furniture"],
  datasets: [
    {
      label: "Sales Data",
      data: [offLen, techLen, furLen],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
    },
  ],
};


// Line chart data
  const linechartdata = {
    datasets: [
      {
        type: "line",
        label: "Profit made on sale",
        borderColor: "#ff0000",
        data: myData
      }
    ]
  };
  // //////////////////////////////////////////



  return (
    <div className='App'>
      <Dashboard
        chartData={chartData}
        isLoading={isLoading}
        currentData={currentData}
        nextPage={nextPage}
        prevPage={prevPage}
        filterProducts={filterProducts}
        linechartdata={linechartdata}
        salesData={salesData}
        sortasc={sortasc}
        sortdec={sortdec}
        sortYearAsc={sortYearAsc}
        sortYearDec={sortYearDec}
      />
    </div>
  );
}

export default App;
