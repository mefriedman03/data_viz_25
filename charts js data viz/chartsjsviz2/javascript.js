var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '# Goals',
            data: [7, 17, 7, 18, 9, 0, 8, 4, 2, 2],
            fill: false,
            borderColor: 'rgba(255, 8, 0)'},
            {
            label: '# Assists',
            data: [0, 3, 2, 3, 3, 0, 2, 1, 4, 1],
            fill: false,
            borderColor: 'rgba(30,144,255)'},
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Alex Morgan scored her most goals in a year in 2018 with 18 goals',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: '2023 was the only year in the past 10 years that Alex Morgan had more assists than goals'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});