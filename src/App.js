import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

import Barchart from "./components/Barchart";
import { cleanup } from "@testing-library/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [salesData, setSalesData] = useState([]);
  const [salesDataCopy, setSalesDataCopy] = useState([]);
  const [chartData, setChartData] = useState({});

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



  const fur = salesData.filter((sales) => sales.Category === "Furniture");
  const furLen = fur.length;

  const off = salesData.filter((sales) => sales.Category === "Office Supplies");
  const offLen = off.length;

  const tech = salesData.filter((sales) => sales.Category === "Technology");
  const techLen = tech.length;



  useEffect(() => {
    fetchSalesData();

    setChartData({
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
    });
    return () => {
      cleanup();
    };
  }, [furLen, offLen, techLen]);

  useEffect(() => {
    setSalesDataCopy(salesData)
  }, [salesData])

  

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
  

  return (
    <div className='App'>
      <Dashboard
        chartData={chartData}
        isLoading={isLoading}
        currentData={currentData}
        nextPage={nextPage}
        prevPage={prevPage}
        filterProducts={filterProducts}
      />
      <Barchart />
    </div>
  );
}

export default App;
