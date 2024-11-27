import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useGet } from "../../../../Hooks";

const StockPriceChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [information, setInformation] = useState("");

  const apiKey = "ZMDFOBH5FOFSYD83";
  const symbol = "AAPL";

  const stockData = useGet(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
  );
  useEffect(()=>{
stockData.fetchData()
  },[])
  const renderChart = async () => {
    try {
     
      const labels = Object.keys(stockData.data).slice(0, 10).reverse();
      const prices = labels.map((date) =>
        parseFloat(stockData.data[date]["4. close"])
      );

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: `Closing Prices of ${symbol} (Last 10 Days)`,
              data: prices,
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderWidth: 2,
              tension: 0.3,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: "Price (USD)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
          },
        },
      });
    } catch (e) {
      console.log(e.message);

      
    }
  };

  useEffect(() => {
    renderChart();
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [stockData.data]);

  useEffect(()=>{

    if (stockData.data?.Information) {
        setInformation(stockData.data?.Information);
      }
  },[stockData.data])

  return (
    <div className="col-lg-6 col-12 ps-lg-2 pt-4 pt-lg-0">
      <div className="bg-white p-4 rounded">
        <h2 className="mb-4">Stock Price Visualization</h2>
        {!information ? (
          <canvas ref={chartRef} width="400" height="200"></canvas>
        ) : (
          <p className="">{information}</p>
        )}
      </div>
    </div>
  );
};

export { StockPriceChart };
