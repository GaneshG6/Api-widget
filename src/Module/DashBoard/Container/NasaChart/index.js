import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useGet } from "../../../../Hooks";

const NasaChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const apiKey = "MhdbCpYwmCGirRg5ipab2brKVewxAend2B6VPpfN";
  const startDate = "2024-11-15"; // Start date
  const endDate = "2024-11-21"; // End date

  const neoData = useGet(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
  );
  useEffect(() => {
    neoData.fetchData();
  }, []);

  const renderChart = async () => {
    try {
      // Extract dates and NEO counts
      const labels = Object.keys(neoData.data.near_earth_objects);
      const counts = labels.map(
        (date) => neoData.data.near_earth_objects[date].length
      );

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Number of Near-Earth Objects",
              data: counts,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of NEOs",
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
      console.log(e);
    }
  };

  useEffect(() => {
    if (neoData.data) {
      renderChart();
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [neoData.data]);

  return (
    <div className="col-lg-6 col-12 pe-lg-2 mt-4">
      <div className="bg-white p-4 rounded">
        <h2 className="mb-4">Near-Earth Objects (NEOs) Detected by Date</h2>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export { NasaChart };
