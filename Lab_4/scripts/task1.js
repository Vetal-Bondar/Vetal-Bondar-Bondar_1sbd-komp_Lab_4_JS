document.addEventListener('DOMContentLoaded', function() {
    const inputA = document.querySelector('.A input');
    const inputB = document.querySelector('.B input');
    const inputC = document.querySelector('.C input');
    
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C'],
            datasets: [{
                label: 'Value',
                data: [0, 0, 0],
                backgroundColor: [
                    'red',
                    'rgb(0, 255, 42)',
                    'rgb(0, 17, 255)'
                ],
                borderColor: [
                    'black',
                    'black',
                    'black'
                ],
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
    
    function updateChart() {
        myChart.data.datasets[0].data[0] = parseInt(inputA.value) || 0;
        myChart.data.datasets[0].data[1] = parseInt(inputB.value) || 0;
        myChart.data.datasets[0].data[2] = parseInt(inputC.value) || 0;
        myChart.update();
    }
    
    inputA.addEventListener('input', updateChart);
    inputB.addEventListener('input', updateChart);
    inputC.addEventListener('input', updateChart);
});