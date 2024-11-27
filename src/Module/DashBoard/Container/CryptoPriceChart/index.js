import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useGet } from '../../../../Hooks';

const CryptoPriceChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); 


const apiData = useGet('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
useEffect(()=>{
apiData.fetchData()
},[])
  const renderChart = async () => {
    try{
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); 
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Bitcoin', 'Ethereum'],
        datasets: [
          {
            label: 'Price in USD',
            data: [apiData.data.bitcoin.usd, apiData.data.ethereum.usd],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  catch(e){
    console.log(e);
    
  }
  };

  useEffect(() => {
    renderChart();
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); 
      }
    };
  }, [apiData.data]);
  return (
    <div className="col-lg-6 col-12  pe-lg-2">
    <div className="bg-white p-4 rounded">
      <h2 className="mb-4">Crypto Price Visualization</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export { CryptoPriceChart}
