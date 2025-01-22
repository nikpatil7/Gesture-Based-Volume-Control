const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', () => {
    console.log('WebSocket connection established');
});

socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    console.log('Received data:', data); // Debugging line
    if (data.volume !== undefined) {
        updateVolumeBar(data.volume);
    }
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

document.getElementById('startButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/start', { method: 'POST' });
        const data = await response.json();
        document.getElementById('status').textContent = `Status: ${data.status}`;
        alert(data.status);
    } catch (error) {
        alert('Failed to start the application');
    }
});

document.getElementById('stopButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/stop', { method: 'POST' });
        const data = await response.json();
        document.getElementById('status').textContent = `Status: ${data.status}`;
        alert(data.status);
    } catch (error) {
        alert('Failed to stop the application');
    }
});

// Simulate volume changes for demonstration purposes
function updateVolumeBar(volume) {
    document.getElementById('volumeBar').value = volume;
    document.getElementById('volumeValue').textContent = `${volume}%`;
}

// Example: Update volume bar every second
setInterval(() => {
    //const simulatedVolume = Math.floor(Math.random() * 101); // Random volume for demo
    //updateVolumeBar(simulatedVolume);
    updateVolumeBar(0);
}, 1000); 