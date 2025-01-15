// Initial Data
let classroomData = {
    temperature: 22,
    humidity: 50,
    students: 25,
    noise: 35,
  };
  
  // Update Display
  function updateDashboard() {
    document.getElementById("temperature").textContent = classroomData.temperature;
    document.getElementById("humidity").textContent = classroomData.humidity;
    document.getElementById("students").textContent = classroomData.students;
    document.getElementById("noise").textContent = classroomData.noise;
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
    updateDashboard();
  });
  
  // Initialize Dashboard
  updateDashboard();
  