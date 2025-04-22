var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: '# of Apples',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#ff0800'
            ]
        },

    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Apples and Oranges by year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'For all but one year, oranges outnumbered apples'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});