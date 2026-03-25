# Server Monitoring Tool

A lightweight, real-time server monitoring dashboard built entirely with native Node.js and Vanilla Web Technologies. No external dependencies or CSS frameworks required.

## 🚀 Features
- **Real-Time Tracking**: Automatically updates metrics every 2 seconds without page reloading.
- **CPU Details**: Displays the number of cores, CPU model, and 1m/5m/15m load averages.
- **RAM Usage**: Tracks total, used, and free memory dynamically via an animated progress bar.
- **Uptime Monitor**: Accurately measures the continuous operational time of your server.
- **Premium Interface**: Features a responsive glassmorphism aesthetic with engaging CSS micro-animations.

## 🛠️ Built With
- **Node.js**: The backend server logic (utilizing built-in `http` and `os` modules).
- **HTML**: Core structure for the dashboard UI.
- **Vanilla CSS**: Beautifully crafted dark-mode styling, gradients, and animations.
- **Vanilla JS**: Handles the dashboard's automated API polling logic.

## 💻 How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone or open this repository in your terminal.
3. Start the application by running the following command:
   ```bash
   node server.js
   ```
4. Open your web browser and navigate to:
   ```text
   http://localhost:3000
   ```
5. To stop the monitor, return to your terminal and press `Ctrl + C`.

## 🤝 Contribution
Feel free to fork this project, open an issue, or submit a Pull Request if you'd like to propose enhancements to the project!
