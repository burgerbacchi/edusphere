// Initial Data
let classroomData = {
  temperature: 22,
  humidity: 50,
  students: 25,
  noise: 35,
};

// Initialize Chart
const ctx = document.getElementById("environmentGraph").getContext("2d");
const environmentGraph = new Chart(ctx, {
  type: "line", // Graph type
  data: {
    labels: ["Temperature (°C)", "Humidity (%)", "Students", "Noise (dB)"], // X-axis labels
    datasets: [
      {
        label: "Classroom Data",
        data: [
          classroomData.temperature,
          classroomData.humidity,
          classroomData.students,
          classroomData.noise,
        ], // Initial data values
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Update Display
function updateDashboard() {
  // Update environment parameters in the DOM
  document.getElementById("temperature").textContent =
    classroomData.temperature;
  document.getElementById("humidity").textContent = classroomData.humidity;
  document.getElementById("students").textContent = classroomData.students;
  document.getElementById("noise").textContent = classroomData.noise;

  // Update Graph Data
  environmentGraph.data.datasets[0].data = [
    classroomData.temperature,
    classroomData.humidity,
    classroomData.students,
    classroomData.noise,
  ];
  environmentGraph.update(); // Refresh the graph
}

// Download Data
document.getElementById("download-btn").addEventListener("click", () => {
  const data = [
    ["Parameter", "Value"],
    ["Temperature", `${classroomData.temperature} °C`],
    ["Humidity", `${classroomData.humidity} %`],
    ["Students", classroomData.students],
    ["Noise", `${classroomData.noise} dB`],
  ];
  const csvContent =
    "data:text/csv;charset=utf-8," +
    data.map((row) => row.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "classroom_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Apply Customization
document.getElementById("apply-btn").addEventListener("click", () => {
  // Update classroom data object with new values
  classroomData.temperature = parseInt(
    document.getElementById("custom-temperature").value,
    10
  );
  classroomData.humidity = parseInt(
    document.getElementById("custom-humidity").value,
    10
  );
  classroomData.students = parseInt(
    document.getElementById("custom-students").value,
    10
  );
  classroomData.noise = parseInt(
    document.getElementById("custom-noise").value,
    10
  );

  // Update both the display and the graph
  updateDashboard();
});

// Initialize Dashboard
updateDashboard();
