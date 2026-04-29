import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DashboardPage.css';

function DashboardPage() {
  const [selectedMonument, setSelectedMonument] = useState('');
  const [monuments, setMonuments] = useState([]);
  const [sensorData, setSensorData] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch latest sensor data every 5 seconds
  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/latest');
        // Convert array to object with monument names as keys
        const dataByMonument = response.data.reduce((acc, item) => {
          acc[item.monument] = item;
          return acc;
        }, {});

        const availableMonuments = Object.keys(dataByMonument);
        setMonuments(availableMonuments);
        setSelectedMonument((prev) => {
          if (availableMonuments.length === 0) return '';
          return availableMonuments.includes(prev) ? prev : availableMonuments[0];
        });

        setSensorData(dataByMonument);
        setError(null);
      } catch (err) {
        setError('Failed to fetch sensor data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestData();
    const interval = setInterval(fetchLatestData, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch history data when monument changes
  useEffect(() => {
    const fetchHistoryData = async () => {
      if (!selectedMonument) {
        setHistoryData([]);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/readings/${encodeURIComponent(selectedMonument)}`);
        const formattedData = response.data.map((reading, index) => ({
          time: new Date(reading.timestamp).toLocaleTimeString(),
          temperature: reading.temperature,
          humidity: reading.humidity,
        }));
        setHistoryData(formattedData);
      } catch (err) {
        console.error('Failed to fetch history data:', err);
        setHistoryData([]);
      }
    };

    fetchHistoryData();
    const interval = setInterval(fetchHistoryData, 5000);
    return () => clearInterval(interval);
  }, [selectedMonument]);

  const currentData = sensorData?.[selectedMonument];

  const getRiskBadge = (riskLevel) => {
    switch (riskLevel) {
      case 0:
        return <span className="risk-badge risk-low">Low Risk</span>;
      case 1:
        return <span className="risk-badge risk-medium">Medium Risk</span>;
      case 2:
        return <span className="risk-badge risk-high">High Risk</span>;
      default:
        return <span className="risk-badge">Unknown</span>;
    }
  };

  const getSensorIcon = (sensor) => {
    const icons = {
      temperature: '🌡️',
      humidity: '💧',
      air_pollution: '🌫️',
      vibration: '📳',
      crack_width: '🔍',
    };
    return icons[sensor] || '📊';
  };

  const formatSensorName = (sensor) => {
    const names = {
      temperature: 'Temperature',
      humidity: 'Humidity',
      air_pollution: 'Air Pollution',
      vibration: 'Vibration',
      crack_width: 'Crack Width',
    };
    return names[sensor] || sensor;
  };

  const getSensorUnit = (sensor) => {
    const units = {
      temperature: '°C',
      humidity: '%',
      air_pollution: 'AQI',
      vibration: 'mm/s',
      crack_width: 'mm',
    };
    return units[sensor] || '';
  };

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <Link to="/" className="navbar-brand">HeritageAI</Link>
        <h1 className="dashboard-title">Monitoring Dashboard</h1>
        <div className="monument-selector">
          <select
            value={selectedMonument}
            onChange={(e) => setSelectedMonument(e.target.value)}
            className="monument-dropdown"
            disabled={monuments.length === 0}
          >
            {monuments.map((monument) => (
              <option key={monument} value={monument}>
                {monument}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <main className="dashboard-content">
        {/* Anomaly Alert Banner */}
        {currentData?.anomaly === -1 && (
          <div className="alert-banner">
            ⚠️ Anomaly Detected at {selectedMonument}! Immediate attention required.
          </div>
        )}

        {loading ? (
          <div className="loading-state">
            <div className="loader"></div>
            <p>Loading sensor data...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="btn btn-primary">
              Retry
            </button>
          </div>
        ) : currentData ? (
          <>
            {/* Health Overview Section */}
            <section className="health-overview">
              <div className="shi-card">
                <h2>Site Health Index</h2>
                <div className="shi-value">
                  {currentData.shi?.toFixed(1)}%
                </div>
                <div className="shi-bar">
                  <div 
                    className="shi-progress" 
                    style={{ width: `${currentData.shi * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="risk-card">
                <h2>Risk Assessment</h2>
                {getRiskBadge(currentData.risk_level)}
              </div>
            </section>

            {/* Sensor Cards */}
            <section className="sensors-section">
              <h2 className="section-title">Sensor Readings</h2>
              <div className="sensors-grid">
                {['temperature', 'humidity', 'air_pollution', 'vibration', 'crack_width'].map((sensor) => (
                  <div key={sensor} className="sensor-card">
                    <div className="sensor-icon">{getSensorIcon(sensor)}</div>
                    <h3>{formatSensorName(sensor)}</h3>
                    <div className="sensor-value">
                      {currentData[sensor]?.toFixed(2)}
                      <span className="sensor-unit">{getSensorUnit(sensor)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* History Chart */}
            <section className="chart-section">
              <h2 className="section-title">Temperature & Humidity History</h2>
              <div className="chart-container">
                {historyData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={historyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#243654" />
                      <XAxis 
                        dataKey="time" 
                        stroke="#a0a0a0" 
                        tick={{ fill: '#a0a0a0' }}
                      />
                      <YAxis 
                        stroke="#a0a0a0" 
                        tick={{ fill: '#a0a0a0' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a2942', 
                          border: '1px solid #d4af37',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="temperature" 
                        stroke="#d4af37" 
                        strokeWidth={2}
                        dot={{ fill: '#d4af37', strokeWidth: 2 }}
                        name="Temperature (°C)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="humidity" 
                        stroke="#4ecdc4" 
                        strokeWidth={2}
                        dot={{ fill: '#4ecdc4', strokeWidth: 2 }}
                        name="Humidity (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="no-data">No history data available</div>
                )}
              </div>
            </section>
          </>
        ) : (
          <div className="no-data-state">
            <p>Waiting for sensor data...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2026 HeritageAI. Real-time Heritage Monitoring System.</p>
      </footer>
    </div>
  );
}

export default DashboardPage;
