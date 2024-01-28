document.addEventListener('DOMContentLoaded', () => {
    const graphForm = document.getElementById('graphForm');
    const dataInput = document.getElementById('dataInput');
    const graphContainer = document.getElementById('graphContainer');
  
    // Initialize Chart.js chart
    const ctx = document.createElement('canvas').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar', // You can change the chart type based on your preference
      data: {
        labels: [],
        datasets: [{
          label: 'Graph Data',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the color as needed
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    graphForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputData = dataInput.value;
      // Call a function to send data to the server and handle the response
      sendDataToServer(inputData);
    });
  
    // Function to send data to the server
    function sendDataToServer(data) {
      fetch('http://localhost:3000/submitData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      })
      .then(response => response.json())
      .then(responseData => {
        // Call a function to display the graph using the retrieved data
        displayGraph(responseData.graphData);
      })
      .catch(error => console.error('Error:', error));
    }
  
    // Function to display the graph using Chart.js
    function displayGraph(data) {
      // Update Chart.js data and labels
      chart.data.labels.push(data);
      chart.data.datasets[0].data.push(data);
  
      // Update the chart
      chart.update();
  
      // Clear the input field
      dataInput.value = '';
    }
  });
  