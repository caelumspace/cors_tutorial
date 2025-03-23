const express = require('express');
const cors = require('cors');
const app = express();

// OPTION A: Allow requests from a specific origin:
app.use(cors({
  origin: 'http://localhost:5173', // or your client’s port
}));

// OPTION B: Allow requests from any origin (development only!):
// app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the Yarn + Express server!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
