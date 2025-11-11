require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files from client_build
app.use(express.static(path.join(__dirname, 'client_build')));

// Add this: catch-all route to serve your frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client_build', 'index.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => res.json({ ok: true, message: 'HCNTS API active' }));

// Manual reminders endpoint
app.post('/api/run-reminders', (req, res) => {
  res.json({ ok: true, message: 'Reminders executed manually' });
});

// Start the server
app.listen(process.env.PORT || 3001, () => console.log('HCNTS server running'));