const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let pythonProcess = null;
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

app.post('/start', (req, res) => {
  if (!pythonProcess) {
    pythonProcess = spawn('python', [path.join(__dirname, '../main.py')]);
    pythonProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    pythonProcess.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      pythonProcess = null;
    });
    return res.status(200).json({ status: 'started' });
  }
  return res.status(400).json({ status: 'already running' });
});

app.post('/stop', (req, res) => {
  if (pythonProcess) {
    pythonProcess.kill();
    pythonProcess = null;
    return res.status(200).json({ status: 'stopped' });
  }
  return res.status(400).json({ status: 'not running' });
});

// Endpoint to receive volume data
app.post('/volume', (req, res) => {
  const { volume } = req.body;
  console.log('Received volume:', volume); // Debugging line
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ volume }));
    }
  });
  res.sendStatus(200);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 