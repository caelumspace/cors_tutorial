import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('CORS or other error:', error);
    }
  };

  return (
    <div>
      <h1>CORS Tutorial Client (Yarn + Vite)</h1>
      <button onClick={handleFetch}>Fetch Data from Server</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
