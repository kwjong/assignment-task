import React, { useEffect, useState } from 'react';
import { getFunds } from '../services/api';

function FundList() {
  const [funds, setFunds] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getFunds()
      .then((res) => setFunds(res.data))
      .catch((err) => {
        console.error("Failed to fetch funds:", err);
        setError("Unable to load funds. Please try again later.");
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!funds.length) return <p>Loading funds...</p>;

  return (
    <div>
      <h2>Available Investment Funds</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {funds.map((fund) => (
          <li
            key={fund.id}
            style={{
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          >
            <h4 style={{ marginBottom: '5px' }}>{fund.name}</h4>
            <p>{fund.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundList;
