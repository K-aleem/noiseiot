// script.js

// Simulated real-time noise data (for demonstration purposes)
function generateRandomNoiseLevel() {
  return Math.floor(Math.random() * (100 - 40 + 1) + 40); // Random noise level between 40 and 100 dB
}

function updateNoiseData() {
  const noiseLevelElement = document.getElementById("noise-level");
  const lastUpdateElement = document.getElementById("last-update");

  const noiseLevel = generateRandomNoiseLevel();
  const currentTime = new Date().toLocaleTimeString();

  noiseLevelElement.textContent = `${noiseLevel} dB`;
  lastUpdateElement.textContent = currentTime;
}

// Update noise data every 3 seconds (for demonstration)
setInterval(updateNoiseData, 3000);

// Add code to create an interactive noise chart using a library like Chart.js or D3.js
