import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CryptoInfoSearch = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [currentPrice, setCurrentPrice] = useState(null);
  const [error, setError] = useState(null);
  const chartRef = useRef(null);

  const symbolToIdMap = {
    "BTC": "bitcoin",
    "ETH": "ethereum",
    "USDT": "tether",
    "BNB": "binancecoin",
    "SOL": "solana",
    "XRP": "ripple",
    "USDC": "usd-coin",
    "STETH": "staked-ether",
    "ADA": "cardano",
    "AVAX": "avalanche-2",
    // Add more mappings for other cryptocurrencies
  };

  useEffect(() => {
    const fetchCryptoGlobalData = async () => {
      try {
        const cachedGlobalData = localStorage.getItem('cryptoGlobalData');
        if (cachedGlobalData) {
          setCryptoData(JSON.parse(cachedGlobalData));
        } else {
          const response = await fetch(`https://api.coingecko.com/api/v3/global`);
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          const data = await response.json();
          setCryptoData(data.data);
          localStorage.setItem('cryptoGlobalData', JSON.stringify(data.data));
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCryptoGlobalData();
  }, []);

  useEffect(() => {
    if (!cryptoData) return;

    const cryptoSymbols = Object.keys(cryptoData.market_cap_percentage);
    const marketCapPercentages = cryptoSymbols.map(cryptoSymbol =>
      cryptoData.market_cap_percentage[cryptoSymbol.toLowerCase()]
    );

    renderChart(cryptoSymbols, marketCapPercentages);
  }, [cryptoData]);

  const renderChart = (labels, data) => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const ctx = document.getElementById('marketCapChart');
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Market Cap Percentage',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };

  const handleCryptoChange = async (event) => {
    const selectedSymbol = event.target.value;
    if (!selectedSymbol) return;

    const selectedId = symbolToIdMap[selectedSymbol];
    if (!selectedId) return;

    setSelectedCrypto(selectedSymbol); // Update selectedCrypto with symbol
    setError(null);

    try {
      const cachedData = localStorage.getItem(selectedId);
      if (cachedData) {
        setCurrentPrice(JSON.parse(cachedData).usd);
      } else {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${selectedId}&vs_currencies=usd`
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setCurrentPrice(data[selectedId]?.usd);
        localStorage.setItem(selectedId, JSON.stringify(data[selectedId]));
      }
    } catch (error) {
      setError(error.message);
      setCurrentPrice(null); // Reset current price on error
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Crypto Global Information</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="cryptoSelect" className="form-label">Select a Cryptocurrency</label>
            <select id="cryptoSelect" className="form-select" value={selectedCrypto} onChange={handleCryptoChange}>
              <option value="">-- Select --</option>
              {Object.keys(symbolToIdMap).map(symbol => (
                <option key={symbol} value={symbol}>{symbol}</option>
              ))}
            </select>
          </div>
          {currentPrice !== null ? (
            <p className="mt-3"><b>{symbolToIdMap[selectedCrypto].toUpperCase()}</b> Current Price to USD: <b>${currentPrice}</b></p>
          ) : (
            <p className="mt-3">Fetching current price...</p>
          )}
          {cryptoData && (
            <div className="mt-3">
              <p>Active Cryptocurrencies: <b>{cryptoData.active_cryptocurrencies}</b></p>
              <p>Ongoing ICOs: <b>{cryptoData.ongoing_icos}</b></p>
              <p>Markets: <b>{cryptoData.markets}</b></p>
            </div>
          )}
        </div>
        <div className="col-lg-12">
          <canvas id="marketCapChart"></canvas>
        </div>
      </div>
      {error && <p className="text-danger mt-3">Error: {error}</p>}
    </div>
  );
};

export default CryptoInfoSearch;
