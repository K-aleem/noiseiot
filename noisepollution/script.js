// Simulated noise data for demonstration purposes
const noiseData = [
  "Noise Level: 70 dB",
  "Noise Level: 75 dB",
  "Noise Level: 80 dB",
];

const noiseDataContainer = document.getElementById("noise-data");
const startMonitoringBtn = document.getElementById("start-monitoring");
const stopMonitoringBtn = document.getElementById("stop-monitoring");

let monitoringInterval;

function updateNoiseData() {
  noiseData.forEach((data) => {
      const p = document.createElement("p");
      p.textContent = data;
      noiseDataContainer.appendChild(p);
  });
}

startMonitoringBtn.addEventListener("click", () => {
  monitoringInterval = setInterval(updateNoiseData, 3000); // Simulated data update every 3 seconds
});

stopMonitoringBtn.addEventListener("click", () => {
  clearInterval(monitoringInterval);
});

// Initial noise data update
updateNoiseData();
