import React, {useEffect, useState} from 'react'
import Dashboard from "./components/Dashboard";

import Barchart from "./components/Barchart";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [salesData, setSalesData] = useState([])
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    getCharData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSalesData = async () => {
    setIsLoading(true)
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
    setSalesData(data)
    setIsLoading(false)
  };

  const category = salesData.map(sales => (
    sales.Category
  ))

  const fur = salesData.filter(sales => sales.Category === 'Furniture')

  const off = salesData.filter(sales => sales.Category === 'Office Supplies')

  const tech = salesData.filter(sales => sales.Category === 'Technology')


  const getCharData =()=> {   
    fetchSalesData()
    setChartData({
      labels: ['Office Supplies', 'Technology', 'Furniture'],
      datasets: [
        {
          label: 'Sales Data',
          data: isLoading ? ([0, 0, 0]): ([off.length, tech.length, fur.length]),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        }
      ]
    })
  }


  return (
    <div className='App'>
      <Dashboard chartData={chartData} />
      <Barchart />
    </div>
  );
}

export default App;
