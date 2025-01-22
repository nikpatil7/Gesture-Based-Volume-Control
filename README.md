# 🚀 Hand Volume Control



This project uses a webcam to detect hand gestures and control the system volume based on the distance between the thumb and index finger. It features a real-time volume bar that updates as you adjust the volume with your hand.

## 🌟 Features

- 🎥 Real-time hand gesture detection using MediaPipe
- 🔊 Volume control using Pycaw
- 🌐 Web-based interface with a real-time volume bar
- 📡 WebSocket communication for real-time updates

## 📸 Demo

![Demo Image 1](/assets/Demo1.png)
![Demo Image 2](/assets/Demo2.png)
![Demo Image 3](/assets/Demo3.png)
![Demo Image 4](/assets/Demo4.png)

## 📚 Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## ⚙️ Setup

### Prerequisites

- Python 3.x
- Node.js
- A webcam

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd gesture-based-volume-control
   ```

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Install Node.js dependencies**:
   ```bash
   cd backend
   npm install
   ```

### Running the Application

1. **Start the Node.js server**:
   ```bash
   npm start
   ```

2. **Run the Python script**:
   ```bash
   python main.py
   ```

3. **Access the web interface**:
   Open your web browser and go to `http://localhost:3000`.

## 🎮 Usage

- Ensure your webcam is connected.
- Use your hand to control the volume by adjusting the distance between your thumb and index finger.
- The volume bar on the web interface will update in real-time to reflect the current volume level.

## 📦 Dependencies

### Python

- OpenCV
- MediaPipe
- NumPy
- Pycaw
- Requests

### Node.js

- Express
- WS (WebSocket)

You can find the complete list of dependencies in the `requirements.txt` and `package.json` files.

