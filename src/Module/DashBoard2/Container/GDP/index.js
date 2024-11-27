import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useGet } from '../../../../Hooks';

const GDP = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); 

  const countries = ['USA', 'CHN', 'IND', 'DEU', 'JPN']; 
  const indicator = 'NY.GDP.MKTP.CD'; // GDP (current US$) indicator
  const baseURL = 'https://api.worldbank.org/v2';
  
  const fetchGDPData = async () => {
    const promises = countries.map(async (country) => {
      const response = await fetch(
        `${baseURL}/country/${country}/indicator/${indicator}?format=json`
      );
      const data = await response.json();
      const latestYearData = data[1].find((entry) => entry.value !== null);
      return { country, value: latestYearData.value, year: latestYearData.date };
    });

    return Promise.all(promises);
  };

  const renderChart = async () => {
    const gdpData = await fetchGDPData();
    const labels = gdpData.map((entry) => `${entry.country} (${entry.year})`);
    const values = gdpData.map((entry) => entry.value);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); 
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'GDP (Current US$)',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
              text: 'GDP (USD)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Countries',
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    renderChart();
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); 
      }
    };
  }, []); 


  return (
    <div className='col-lg-8 col-12 '>
        <div className='bg-white rounded p-4'>
      <h2 className='mb-4'>GDP of Countries (World Bank Data)</h2>
      <canvas ref={chartRef} width="600" height="400"></canvas>
      </div>
    </div>
  );
};

export { GDP};
