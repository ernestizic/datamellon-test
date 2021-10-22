import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

import Barchart from "./components/Barchart";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [salesData, setSalesData] = useState([]);
  const [chartData, setChartData] = useState({});

  
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
    
  }, [furLen, offLen, techLen]);

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
      <Dashboard chartData={chartData} isLoading={isLoading} salesData={salesData} />
      <Barchart />
    </div>
  );
}

export default App;
